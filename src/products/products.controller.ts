import { Post, Controller, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";


@Controller('products')
export class ProductsController {

  constructor(
    private readonly productService: ProductsService
  ) {}

  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): {id: string} {
    const generatedId: string = this.productService.insertProduct(title, description, price);
    return {
      id: generatedId
    }
  }
}