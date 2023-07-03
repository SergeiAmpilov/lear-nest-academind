import { Post, Controller } from "@nestjs/common";


@Controller('products')
export class ProductsController {

  @Post()
  addProduct(): any {
    
  }
}