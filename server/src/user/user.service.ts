import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

  constructor(private db: PrismaService) { }
  async create(data: CreateUserDto): Promise<User> {
    // Olhar na documentação do prisma e tentar unificar daqui
    const exists = await this.db.user.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            nickname: data.nickname
          },
        ],
      },
    });
      if (exists) {
        throw new ConflictException('Email or nickname already in use!')
      }
    if (data.password !== data.passwordConfirmation) {
      throw new ConflictException('Senhas não conferem');
    }

    delete data.passwordConfirmation;

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.db.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    delete user.password;
    return user;
  }

  async userList(userId: string) {
    const product = await this.db.user.findUnique({
      where: { id: userId },
      include: {
        products: true,
      },
    });
    return product;
  }

  async addFav(user: User, productId:string){
    const product = await this.db.product.findUnique({
      where: { id: productId},
    })
    
    if(!product){
      throw new NotFoundException('Product not found')
    }
    const userLikedProduct = await this.db.user.findUnique({
      where: {id: user.id},
      include: {
        products: true
      },
    });

    const userProductList = userLikedProduct.products;

    let foundProduct = false 

    userProductList.map((product) => {
      if(product.id === productId){
        foundProduct = true
      }
    });

    if (foundProduct) {
      await this.db.user.update({
        where: { id: user.id},
        data: {
          products: {
            disconnect: {
              id: product.id
            }
          }
        }
      })
      return {message: 'Product Remove From List'}
    }else {
      await this.db.user.update({
        where: {id: user.id},
        data:{
          products:{
            connect:{
              id: product.id,
            }
          }
        }
      })
      return { message: 'Product Add to your list'}
    }
  }
}
