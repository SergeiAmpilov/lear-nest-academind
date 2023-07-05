import { Injectable } from '@nestjs/common';

@Injectable()
export class SpeakerService {
  
  sayHi(text: string): void {
    console.log(`Hello ${text} world`);
  }

}
