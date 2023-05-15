import { Injectable, MiddlewareConsumer, NestMiddleware, NestModule, RequestMethod } from '@nestjs/common';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('进入中间件')
    // res.send('禁止访问，你被拦截了');
    next();
  }
}


// export class GirlModule  implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(CounterMiddleware).forRoutes({path:'girl',method:RequestMethod.GET})
//   }
// }

