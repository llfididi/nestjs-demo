// import { Module } from '@nestjs/common';
// import { GirlModule } from './girl/girl.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { GirlController } from './girl/girl.controller';
// import { GirlService } from './girl/girl.service';
// // @Module({
// //   imports: [GirlModule],
// //   controllers: [],
// //   providers: [],
// // })
// // export class AppModule {}


// @Module({
//   imports:[ TypeOrmModule.forRoot({
//     type:'mysql',           // 数据库类型
//     host:'localhost',       // 数据库的连接地址host
//     port:3306,              // 数据库的端口 3306
//     username:'admin',        // 连接账号
//     password:'123456',     // 连接密码
//     database:'aaa',     // 连接的表名
//     retryDelay:500,         // 重试连接数据库间隔
//     retryAttempts:10,       // 允许重连次数
//   })],
//   controllers: [GirlController],
//   providers: [GirlService],
  
// })
// export class AppModule {}




import { Module } from '@nestjs/common';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoyModule } from './boy/boy.module';
import {ConfigModule} from './config/config.module'
import { OrderModule } from './order/order.module';


@Module({
  imports: [GirlModule,ConfigModule,ConfigModule.forRoot('中心'), TypeOrmModule.forRoot({
    type:'mysql',           // 数据库类型
    host:'localhost',       // 数据库的连接地址host
    port:3306,              // 数据库的端口 3306
    username:'admin',        // 连接账号
    password:'123456',     // 连接密码
    database:'aaa',   // 连接的表名
    retryDelay:500,         // 重试连接数据库间隔
    retryAttempts:10,       // 充实次数
    synchronize:true,       // 是否将实体同步到数据库
    autoLoadEntities:true,  // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
  }), BoyModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}