import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('json')
  @Header('Content-Type', 'text/html')
  getJson(): { [key: string]: number } {
    return this.appService.getJson()
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
