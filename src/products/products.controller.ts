import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // @Post()
  @MessagePattern({ cmd: 'create_product' })
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  // @Get()
  @MessagePattern({ cmd: 'get_products' })
  findAll() {
    return this.productsService.findAll();
  }

  // @Get('/:id')
  @MessagePattern({ cmd: 'get_product' })
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  // @Delete('/:id')
  @MessagePattern({ cmd: 'remove_product' })
  remove(@Param('id') id: number) {
    return this.productsService.remove(id);
  }
}
