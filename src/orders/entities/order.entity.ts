import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  Column,
} from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column()
  date: Date;

  @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail;
}
