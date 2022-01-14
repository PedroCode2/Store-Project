import { CreateProductDto } from "./create-product.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateManyProductDto{
    @IsNotEmpty()
    @ApiProperty()
    product: CreateProductDto[];
}