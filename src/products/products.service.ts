import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductRepository) {}
  create(createProductDto: CreateProductDto) {
    return this.productsRepository.createProduct(createProductDto);
  }

  findAll() {
    return this.productsRepository.getProducts();
  }

  findOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.updateProduct(id, updateProductDto);
  }

  remove(id: number) {
    return this.productsRepository.remove(id);
  }
}
