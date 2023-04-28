import { Controller, Get, Post, Request, Query } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService:GirlService){}
  @Get()
  getGirls():any{
    return this.girlService.getGirls();
  }
  @Post('/add')
  addGirl():any{
    return this.girlService.addGirl();
  }



  // @Get('/getGirlById')
  // getGirlById(@Request() req):any{
  //   //因为通过Get方式传递过来的是字符串，所有我们需要用parseInt转化为数字
  //   let id = parseInt(req.query.id) 
  //   return this.girlService.getGirlById(id)
  // }


  @Get('/getGirlById')
  getGirlById(@Query() query):any{
    let id:number = parseInt(query.id) 
    return this.girlService.getGirlById(id)
  }
  //this.girlService = new GirlService();

 //.......
}