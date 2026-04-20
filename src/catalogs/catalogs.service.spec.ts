import { Test, TestingModule } from '@nestjs/testing';
import { CatalogsService } from './catalogs.service';
import { PrismaService } from '../prisma/prisma.service';

describe('CatalogsService', () => {
  let service: CatalogsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatalogsService,
        {
          provide: PrismaService,
          useValue: {
            province: { findMany: jest.fn(), findUnique: jest.fn() },
            highSchool: { findMany: jest.fn() },
            major: { findMany: jest.fn() },
            candidate: { findMany: jest.fn() },
            ward: { findMany: jest.fn() },
          },
        },
      ],
    }).compile();

    service = module.get<CatalogsService>(CatalogsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getProvinces', () => {
    it('should return all provinces', async () => {
      const mockProvinces = [
        { id: 'HN', name: 'Hà Nội', region: 'North' },
        { id: 'HCM', name: 'Hồ Chí Minh', region: 'South' },
      ];

      jest
        .spyOn(prisma.province, 'findMany')
        .mockResolvedValue(mockProvinces as any);

      const result = await service.getProvinces();

      expect(result.data).toHaveLength(2);
      expect(result.data[0].code).toBe('HN');
      expect(result.data[0].name).toBe('Hà Nội');
    });

    it('should return empty array when no provinces', async () => {
      jest.spyOn(prisma.province, 'findMany').mockResolvedValue([]);

      const result = await service.getProvinces();

      expect(result.data).toHaveLength(0);
    });
  });

  describe('getWards', () => {
    it('should return wards for valid province code', async () => {
      const mockWards = [
        { id: '01P001', name: 'Phường Cầu Giấy', provinceCode: '01' },
        { id: '01P002', name: 'Phường Dịch Vọng', provinceCode: '01' },
      ];

      jest
        .spyOn(prisma.province, 'findUnique')
        .mockResolvedValue({ id: '01' } as any);
      jest.spyOn(prisma.ward, 'findMany').mockResolvedValue(mockWards as any);

      const result = await service.getWards('01');

      expect(result.data).toHaveLength(2);
      expect(result.data[0].code).toBe('01P001');
    });

    it('should throw error for invalid province code', async () => {
      jest.spyOn(prisma.province, 'findUnique').mockResolvedValue(null);

      await expect(service.getWards('INVALID')).rejects.toThrow();
    });
  });

  describe('getSchools', () => {
    it('should return schools for valid province', async () => {
      const mockSchools = [
        { id: 'HS001', name: 'THPT Chuyên Hà Nội', provinceCode: 'HN' },
      ];

      jest
        .spyOn(prisma.province, 'findUnique')
        .mockResolvedValue({ id: 'HN' } as any);
      jest
        .spyOn(prisma.highSchool, 'findMany')
        .mockResolvedValue(mockSchools as any);

      const result = await service.getSchools('HN');

      expect(result.data).toHaveLength(1);
      expect(result.data[0].code).toBe('HS001');
    });

    it('should throw error for invalid province', async () => {
      jest.spyOn(prisma.province, 'findUnique').mockResolvedValue(null);

      await expect(service.getSchools('INVALID')).rejects.toThrow();
    });
  });

  describe('getMajors', () => {
    it('should return all active majors', async () => {
      const mockMajors = [
        {
          id: 'MJ001',
          name: 'Kiến trúc',
          scholarshipGroupId: 'KT',
          requiresArtExam: true,
        },
        {
          id: 'MJ002',
          name: 'Thiết kế nội thất',
          scholarshipGroupId: 'KT',
          requiresArtExam: true,
        },
      ];

      jest.spyOn(prisma.major, 'findMany').mockResolvedValue(mockMajors as any);

      const result = await service.getMajors();

      expect(result.data).toHaveLength(2);
      expect(result.data[0].requiresArtExam).toBe(true);
    });

    it('should filter by scholarship group', async () => {
      const mockMajors = [
        {
          id: 'MJ001',
          name: 'Kiến trúc',
          scholarshipGroupId: 'KT',
          requiresArtExam: true,
        },
      ];

      jest.spyOn(prisma.major, 'findMany').mockResolvedValue(mockMajors as any);

      const result = await service.getMajors('KT');

      expect(result.data).toHaveLength(1);
    });
  });
});
