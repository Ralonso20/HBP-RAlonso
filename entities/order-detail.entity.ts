import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @OneToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn()
  order: Order;

  @ManyToMany(() => Product, (product) => product.orderDetails)
  products: Product[];
}
