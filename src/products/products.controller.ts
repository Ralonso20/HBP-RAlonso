import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @HttpCode(200)
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.productsService.findAll(page, limit);
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: Partial<UpdateProductDto>,
  ) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    const updateProduct = await this.productsService.update(
      id,
      updateProductDto as UpdateProductDto,
    );

    return updateProduct;
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    const product = this.productsService.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return this.productsService.remove(id);
  }
}
