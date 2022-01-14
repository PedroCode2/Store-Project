import {
  Body,
  Controller,
  Patch,
  Post,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from 'src/auth/auth-user.decorator';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Create an User',
  })
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }

  @UseGuards(AuthGuard())
  @Get('userList')
  @ApiOperation({
    summary: 'Ver a lista de jogos favoritos do usuário',
  })
  @ApiBearerAuth()
  userList(@AuthUser() user: User) {
    return this.service.userList(user.id);
  }

  @UseGuards(AuthGuard())
  @Patch('addfav/:id')
  @ApiOperation({
    summary: 'add a item in favorite',
  })
  @ApiBearerAuth()
  addFav(@AuthUser() user: User, @Param('id') productId: string) {
    return this.service.addFav(user, productId);
  }
}
