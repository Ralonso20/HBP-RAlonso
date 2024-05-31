import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetail } from './entities/order-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
  ) {}
  create(createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailRepository.save(createOrderDetailDto);
  }

  findAll() {
    return `This action returns all orderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }

  async findOneByOrderId(
    orderId: string,
    relations: string[] = [],
  ): Promise<OrderDetail[]> {
    return await this.orderDetailRepository.find({
      where: { order: { id: orderId } },
      relations: relations,
    });
  }
}
