import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateManyProductDto } from './dto/createMany-product.dto';
import { PrismaService } from 'src/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private db: PrismaService){}

  async create(data: CreateProductDto): Promise<Product> {
    const product = await this.db.product.create({
        data,
    })
    return product
  }

  async findPerName (name: string): Promise<Product> {
      const product = await this.db.product.findFirst({
          where: {name: name},
      });
      return product
  }
  async findMany (): Promise<Product[]> {
      const products = await this.db.product.findMany();
    return products
  }
  async findUnique (id: string): Promise<Product> {
      const product = await this.db.product.findUnique({
          where: {id}
      })
      if(!product){
          throw new NotFoundException('Id Not Found')
      }
      return product
  }
}
