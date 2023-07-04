import { Post, Controller, Body, Get, Param } from "@nestjs/common";
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

  @Get()
  getAllProducts() {
    return {
      products: this.productService.getProducts()
    };
  }

  @Get(':id')
  getProduct(
    @Param('id') id: string
  ) {
    return {
      product: this.productService.getSingleProduct(id)
    };
  }
}