import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';

import {TypeOrmModule} from '@nestjs/typeorm'
import { Girl } from './entities/girl.entity';

import {CounterMiddleware} from '../counter/counter.middleware'
import { BoyService } from 'src/boy/boy.service';

@Module({
  imports:[TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  // providers: [GirlService]  // usclass 就是GirlService
  providers:[{
    provide:"aa",
    useClass:GirlService
  },
  {
    provide:"GirlArray",
    useValue:['123','345','234']
  },
  {
    provide:"MyFactory",
    useFactory(){
      console.log('myFactory---------:')
      return 'console.log() function'
    }
  },BoyService
  


]
})
// export class GirlModule {}
export class GirlModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CounterMiddleware).forRoutes('ind')

    // 仅get请求
    // consumer.apply(CounterMiddleware).forRoutes({path:'girl',method:RequestMethod.GET})


  }
}