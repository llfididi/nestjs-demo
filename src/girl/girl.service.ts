import {
  Controller,
  Inject,
  Get,
  Body,
  Param,
  Injectable,
} from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
// @Controller('girl')
export class GirlService {
  // 依赖注入
  constructor(@InjectRepository(Girl) private girl: Repository<Girl>) {}
  addGirl() {
    const data = new Girl();
    data.name = '大梨';
    data.age = 25;
    data.skill = '123,456';
    return this.girl.save(data);
  }

  delGirl(id: number) {
    console.log(id);
    return this.girl.delete(id);
  }
  updateGirl(id: number) {
    let data = new Girl();
    data.name = 'xi';
    data.age = 19;
    return this.girl.update(id, data);
  }

  getGirls() {
    return this.girl.find();
  }

  getGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }
}

// @Injectable()
// export class GirlService {
//   getGirls() {
//     return {
//       code: 0,
//       data: ['1', '2', '3'],
//       msg: '请求列表成功',
//     };
//   }

//   addGirl(a) {
//     console.log(a,'23433333');
//     return {
//       code: 200,
//       data: { id: 1, name: 'eee', age: 27 },
//       msg: '添加成功',
//     };
//   }

//   getGirlById(id:number){
//     let  reJson:any ={}
//     switch(id){
//       case 1:
//          reJson={id:1,name:'翠花',age:18}
//          break;
//       case 2:
//          reJson={id:2,name:'小红',age:20}
//          break;
//       case 3:
//          reJson={id:3,name:'大丫',age:23}
//          break;
//     }
//     return reJson;
//   }
// }
