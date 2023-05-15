import { Girl } from 'src/girl/entities/girl.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderId : number;

  @Column()
  orderDate : Date;

  @Column()
  orderMoney : number;

  @ManyToOne(()=>Girl, girl=>girl.order)
  girl:Girl; // 多对一关系

}


// export class Order {}
