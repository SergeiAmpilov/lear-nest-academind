import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('json')
  getJson(): { [key: string]: number } {
    return this.appService.getJson()
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
