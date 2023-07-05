import { Module } from '@nestjs/common';
import { SpeakerService } from './speaker.service';

@Module({
  providers: [SpeakerService],
  exports: [SpeakerService]
})
export class TestModule {}
