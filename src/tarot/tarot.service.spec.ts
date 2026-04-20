import { Test, TestingModule } from '@nestjs/testing';
import { TarotService } from './tarot.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TarotService - Play Limit', () => {
  let service: TarotService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TarotService,
        {
          provide: PrismaService,
          useValue: {
            tarotCard: {
              findMany: jest.fn(),
            },
            tarotSession: {
              create: jest.fn(),
              findMany: jest.fn(),
              count: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<TarotService>(TarotService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('drawCard', () => {
    it('should allow first draw of the day', async () => {
      const mockCards = [
        {
          id: 1,
          name: 'THE MAGICIAN',
          cardTitle: 'The Magician',
          meaning: 'Test',
          isActive: true,
        },
      ];

      jest
        .spyOn(prisma.tarotCard, 'findMany')
        .mockResolvedValue(mockCards as any);
      jest.spyOn(prisma.tarotSession, 'count').mockResolvedValue(0);
      jest.spyOn(prisma.tarotSession, 'create').mockResolvedValue({
        id: 'session-1',
        cardId: 1,
        isWin: false,
      } as any);

      const result = await service.drawCard({
        playerName: 'Test Player',
        zaloUserId: 'user123',
      });

      expect(result.sessionId).toBeDefined();
      expect(prisma.tarotSession.create).toHaveBeenCalled();
    });

    it('should reject draw when daily limit (3) is reached', async () => {
      jest.spyOn(prisma.tarotCard, 'findMany').mockResolvedValue([]);
      jest.spyOn(prisma.tarotSession, 'count').mockResolvedValue(3);

      try {
        await service.drawCard({
          playerName: 'Test Player',
          zaloUserId: 'user123',
        });
        expect(true).toBe(false);
      } catch (error: any) {
        expect(error.status).toBe(429);
      }
    });

    it('should provide nextPlayAt when limit reached', async () => {
      jest.spyOn(prisma.tarotSession, 'count').mockResolvedValue(3);

      try {
        await service.drawCard({
          playerName: 'Test Player',
          zaloUserId: 'user123',
        });
      } catch (error: any) {
        expect(error.response).toHaveProperty('nextPlayAt');
      }
    });
  });
});
