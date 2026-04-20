import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { NewsModule } from './news/news.module';
import { FaqModule } from './faq/faq.module';
import { TarotModule } from './tarot/tarot.module';
import { CandidateModule } from './candidate/candidate.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    NewsModule,
    FaqModule,
    TarotModule,
    CandidateModule,
    CatalogsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
