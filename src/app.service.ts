import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getJson(): { [key: string]: number } {

    return {
      max: 41,
      oksana: 23
    }

  }
}
