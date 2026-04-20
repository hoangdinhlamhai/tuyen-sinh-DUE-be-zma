import { Module } from '@nestjs/common';
import { CatalogsController, AdmissionController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CatalogsController, AdmissionController],
  providers: [CatalogsService],
  exports: [CatalogsService],
})
export class CatalogsModule {}
