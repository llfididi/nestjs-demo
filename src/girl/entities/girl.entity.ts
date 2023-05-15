import { Order } from 'src/order/entities/order.entity'
import {Entity , Column ,PrimaryGeneratedColumn ,CreateDateColumn ,Generated, OneToMany, JoinColumn} from 'typeorm'

@Entity()
export class Girl{
  
  @PrimaryGeneratedColumn("uuid")
  id:number

  @Column({type:"varchar",length:255})
  name:string

  @Column({type:"int"})
  age:number

  @Column({type:"varchar"})
  skill:string

  @CreateDateColumn({type:"timestamp"})
  entryTime:Date

  @OneToMany(()=>Order,(order)=>order.girl)
  @JoinColumn()
  order:Order[]; // 一对多关系
}