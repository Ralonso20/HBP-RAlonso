import { User } from 'src/users/entities/user.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail;
}
