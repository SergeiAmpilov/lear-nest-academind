import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { MongooseModule } from "@nestjs/mongoose/dist/mongoose.module";
import { ProductSchema } from "./product.model";
import { TestModule } from "src/test/test.module";

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Product',
      schema: ProductSchema
    }
  ]), TestModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }