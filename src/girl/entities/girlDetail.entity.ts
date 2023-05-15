import {Entity ,OneToOne, Column ,PrimaryGeneratedColumn, JoinColumn} from 'typeorm'
import{ Girl } from './girl.entity'

@Entity()
export class GirlDetail {
  //...
  @OneToOne(()=>Girl)
  @JoinColumn()
  girl:Girl

}