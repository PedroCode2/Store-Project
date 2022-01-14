import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Create a Product'
  })
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.service.create(createProductDto);
  }

  @Get('findMany')
  @ApiOperation({
    summary: 'Show All Products'
  })
  findAll(): Promise<Product[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  @ApiOperation({
    summary:'Show Products by id'
  })
  async findUnique(@Param('id') id: string) {
    return this.service.findUnique(id);
  }

}
