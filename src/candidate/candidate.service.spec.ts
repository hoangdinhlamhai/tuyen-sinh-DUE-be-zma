import { Test, TestingModule } from '@nestjs/testing';
import { CandidateService } from './candidate.service';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('CandidateService', () => {
  let service: CandidateService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CandidateService,
        {
          provide: PrismaService,
          useValue: {
            candidate: {
              findUnique: jest.fn(),
              findFirst: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<CandidateService>(CandidateService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('checkByEmail', () => {
    it('should return found=true when email exists', async () => {
      const mockCandidate = {
        id: 'CAND001',
        email: 'test@example.com',
        fullName: 'Nguyen Van A',
      };

      jest
        .spyOn(prisma.candidate, 'findUnique')
        .mockResolvedValue(mockCandidate as any);

      const result = await service.checkByEmail('test@example.com');

      expect(result.found).toBe(true);
      expect(result.candidateId).toBe('CAND001');
      expect(result.message).toBe('Email đã được đăng ký');
    });

    it('should return found=false when email does not exist', async () => {
      jest.spyOn(prisma.candidate, 'findUnique').mockResolvedValue(null);

      const result = await service.checkByEmail('new@example.com');

      expect(result.found).toBe(false);
      expect(result.message).toBe('Email chưa được đăng ký');
    });
  });

  describe('register', () => {
    const validRegisterDto = {
      email: 'new@example.com',
      fullName: 'Nguyen Van B',
      dob: '2005-01-15',
      gender: 'male' as const,
      idCard: '123456789012',
      phone: '0987654321',
      contactProvinceCode: 'HN',
      contactWard: 'Phuong 1',
      contactStreet: '123 Duong ABC',
      highSchoolCode: 'HS001',
      priority1: 'MJ001',
      priority2: 'MJ002',
      priority3: undefined,
      methods: ['hoc_ba', 'thi_TN'],
    };

    it('should create new candidate successfully', async () => {
      jest.spyOn(prisma.candidate, 'findUnique').mockResolvedValue(null);
      jest.spyOn(prisma.candidate, 'create').mockResolvedValue({
        id: 'CAND002',
        ...validRegisterDto,
      } as any);

      const result = await service.register(validRegisterDto);

      expect(result.success).toBe(true);
      expect(result.candidateId).toBe('CAND002');
      expect(prisma.candidate.create).toHaveBeenCalled();
    });

    it('should throw BadRequestException when email already exists', async () => {
      jest.spyOn(prisma.candidate, 'findUnique').mockResolvedValue({
        id: 'EXISTING',
        email: 'test@example.com',
      } as any);

      await expect(service.register(validRegisterDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('getByZaloId', () => {
    it('should return candidate when found by zaloId', async () => {
      const mockCandidate = {
        id: 'CAND001',
        zaloId: 'zalo123',
        email: 'test@example.com',
        fullName: 'Nguyen Van Z',
        avatarUrl: 'https://example.com/avatar.jpg',
      };

      jest
        .spyOn(prisma.candidate, 'findFirst')
        .mockResolvedValue(mockCandidate as any);

      const result = await service.getByZaloId('zalo123');

      expect(result.id).toBe('CAND001');
      expect(result.zaloId).toBe('zalo123');
    });

    it('should throw NotFoundException when zaloId not found', async () => {
      jest.spyOn(prisma.candidate, 'findFirst').mockResolvedValue(null);

      await expect(service.getByZaloId('unknown')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('updateProfile', () => {
    it('should update zaloId and avatarUrl successfully', async () => {
      const mockCandidate = {
        id: 'CAND001',
        zaloId: 'zalo123',
        email: 'test@example.com',
        fullName: 'Test User',
        avatarUrl: null,
      };

      jest
        .spyOn(prisma.candidate, 'findFirst')
        .mockResolvedValue(mockCandidate as any);
      jest.spyOn(prisma.candidate, 'update').mockResolvedValue({
        ...mockCandidate,
        zaloId: 'zalo456',
        avatarUrl: 'https://example.com/new.jpg',
      } as any);

      const result = await service.updateProfile('zalo123', {
        zaloId: 'zalo456',
        avatarUrl: 'https://example.com/new.jpg',
      });

      expect(result.zaloId).toBe('zalo456');
      expect(result.avatarUrl).toBe('https://example.com/new.jpg');
      expect(prisma.candidate.update).toHaveBeenCalled();
    });

    it('should throw NotFoundException when updating non-existent zaloId', async () => {
      jest.spyOn(prisma.candidate, 'findFirst').mockResolvedValue(null);

      await expect(
        service.updateProfile('unknown', { avatarUrl: 'https://x.com/a.jpg' }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should update only provided fields', async () => {
      const mockCandidate = {
        id: 'CAND001',
        zaloId: 'zalo123',
        email: 'test@example.com',
        fullName: 'Old Name',
        avatarUrl: 'https://old.jpg',
      };

      jest
        .spyOn(prisma.candidate, 'findFirst')
        .mockResolvedValue(mockCandidate as any);
      jest.spyOn(prisma.candidate, 'update').mockResolvedValue({
        ...mockCandidate,
        fullName: 'New Name',
      } as any);

      const result = await service.updateProfile('zalo123', {
        fullName: 'New Name',
      });

      expect(result.fullName).toBe('New Name');
      expect(result.avatarUrl).toBe('https://old.jpg');
    });
  });

  describe('getById', () => {
    it('should return candidate when found', async () => {
      const mockCandidate = {
        id: 'CAND001',
        email: 'test@example.com',
        fullName: 'Test User',
      };

      jest
        .spyOn(prisma.candidate, 'findUnique')
        .mockResolvedValue(mockCandidate as any);

      const result = await service.getById('CAND001');

      expect(result.id).toBe('CAND001');
    });

    it('should throw NotFoundException when candidate not found', async () => {
      jest.spyOn(prisma.candidate, 'findUnique').mockResolvedValue(null);

      await expect(service.getById('NOTFOUND')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
