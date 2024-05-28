import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductRepository {
  private products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      stock: 20,
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      stock: 30,
      imgUrl: 'https://via.placeholder.com/150',
    },
  ];

  async getProducts() {
    return this.products;
  }

  createProduct(createProductDto: CreateProductDto) {
    const { name, price } = createProductDto;
    const newProduct = {
      id: this.products.length + 1,
      name: name || 'Default Name',
      price: price || 0,
      description: createProductDto.description || 'Default Description',
      stock: createProductDto.stock || 0,
      imgUrl: createProductDto.imgUrl || 'https://via.placeholder.com/150',
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }
    const updatedProduct = { ...product, ...updateProductDto };
    this.products = this.products.map((p) =>
      p.id === id ? updatedProduct : p,
    );
    return updatedProduct;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  remove(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
    return id;
  }
}
