import { Category } from 'src/categories/entities/category.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import {
  ManyToOne,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column({
    nullable: true,
  })
  imgUrl: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToMany(() => OrderDetail, (orderDetail) => orderDetail.products)
  @JoinTable()
  orderDetails: OrderDetail[];
}
