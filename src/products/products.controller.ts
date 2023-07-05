import { Post, Controller, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";


@Controller('products')
export class ProductsController {

  constructor(
    private readonly productService: ProductsService
  ) {}

  @Post()
  async addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const generatedId = await this.productService.insertProduct(title, description, price);
    return {
      id: generatedId
    }
  }

  @Get()
  async getAllProducts() {
    const products = await this.productService.getProducts();
    return { products };
  }

  @Get(':id')
  async getProduct(
    @Param('id') id: string
  ) {
    const product = await this.productService.getSingleProduct(id);
    return {
      product
    };
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    return {
      product: this.productService.updateProduct(id, title, description, price)
    };
  }

  @Delete(':id')
  deleteProduct(
    @Param('id') id: string,
  ) {
    this.productService.deleteProduct(id);
    return {
      message: 'ok, deleted'
    }
  }
}