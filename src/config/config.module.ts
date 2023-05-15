import {Module,Global, DynamicModule} from '@nestjs/common'

@Global()
// @Module({
//   providers:[{
//     provide:"Config",
//     useValue:{shopName:"红"}
//   }],
//   exports:[{
//     provide:"Config",
//     useValue:{shopName:"红"}
//   }]
// })
// export class ConfigModule{}

export class ConfigModule{
    static forRoot (option:string):DynamicModule{
       return {
         module:ConfigModule,
         providers:[{
           provide:"Config",
           useValue:{shopName:"浪漫"+option}
         }],
         exports:[{
           provide:"Config",
           useValue:{shopName:"浪漫"+option}
         }]
       }
     }
   }