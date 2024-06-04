import {
  IsString,
  IsArray,
  IsUUID,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { Product } from 'src/products/entities/product.entity';
export class CreateOrderDto {
  @IsString()
  @IsUUID()
  userId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PartialProductDTO)
  products: PartialProductDTO[];
}

export class PartialProductDTO extends PartialType(Product) {}
