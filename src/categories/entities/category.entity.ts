import { Product } from 'src/products/entities/product.entity';
import { OneToMany, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
