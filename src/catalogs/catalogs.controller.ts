import { Controller, Get, Param, Query } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';

@Controller('catalogs')
export class CatalogsController {
  constructor(private readonly catalogsService: CatalogsService) {}

  @Get('provinces')
  getProvinces() {
    return this.catalogsService.getProvinces();
  }

  @Get('wards/:provinceCode')
  getWards(@Param('provinceCode') provinceCode: string) {
    return this.catalogsService.getWards(provinceCode);
  }

  @Get('schools/:provinceCode')
  getSchools(@Param('provinceCode') provinceCode: string) {
    return this.catalogsService.getSchools(provinceCode);
  }
}

@Controller('admission')
export class AdmissionController {
  constructor(private readonly catalogsService: CatalogsService) {}

  @Get('majors')
  getMajors(@Query('group') group?: string) {
    return this.catalogsService.getMajors(group);
  }
}
