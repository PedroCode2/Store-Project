import { IsString, IsNumber, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @ApiProperty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    amount: number

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @ApiProperty()
    description: string
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    imageUrl: string
}
