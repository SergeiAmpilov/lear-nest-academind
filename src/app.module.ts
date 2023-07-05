import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost:27017/studynestdb'), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
