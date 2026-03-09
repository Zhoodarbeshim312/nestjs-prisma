import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductPatchDto, ProductPostDto } from './dto/product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('get-all-products')
  findAllProducts() {
    return this.appService.findAllProducts();
  }
  @Get('get-by-id-product/:id')
  findByIdProducts(@Param('id') id: string) {
    return this.appService.findByIdProducts(+id);
  }
  @Post('add-product')
  addProduct(@Body() dto: ProductPostDto) {
    return this.appService.addProduct(dto);
  }
  @Patch('update-product/:id')
  updateProduct(@Param('id') id: string, @Body() dto: ProductPatchDto) {
    return this.appService.updateProduct(+id, dto);
  }
  @Delete('delete-product/:id')
  deleteProduct(@Param('id') id: string) {
    return this.appService.deleteProduct(+id);
  }
}
