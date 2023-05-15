import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Headers,
  Inject,
} from '@nestjs/common';
import { GirlService } from './girl.service';
import {BoyService} from './../boy/boy.service';

@Controller('ind')
export class GirlController {
  // constructor(private girlService: GirlService) {}
  constructor(
    @Inject('aa') private girlService: GirlService,
    @Inject('GirlArray') private girls: string[],
    @Inject('MyFactory') private myFactory:string,
    @Inject('Config') private  shopName:string,
    private  BoyService:BoyService

  ) {}


  @Get('/corstest')
  corsTest():object{
    return {message:'测试跨域请求成功'}
  }

  // @Get('/test')
  // test(): string[] {
  //   console.log(this.myFactory)
  //   return this.girls;
  // }

  @Get('/test')
  test():string{
    return this.BoyService.findAll()
  }

  @Get('/test1')
  test1():string{
    return this.shopName
  }


  @Get('/aad')
  hotLoad():any{
    return 'HotLoad Function';
  }

  // @Post('/add')
  // addGirl():any{
  //   return this.girlService.addGirl();
  // }

  // @Get('/getGirlById')
  // getGirlById(@Request() req):any{
  //   //因为通过Get方式传递过来的是字符串，所有我们需要用parseInt转化为数字
  //   let id = parseInt(req.query.id)
  //   return this.girlService.getGirlById(id)
  // }

  // @Get('/getGirlById')
  // getGirlById(@Query() query): any {
  //   let id: number = parseInt(query.id);
  //   return this.girlService.getGirlById(id);
  // }

  // @Post('/add')
  // addGirl(@Request() req): any {
  //   console.log(req.body);
  //   return this.girlService.addGirl('ret');
  // }

  // @Get('/findGirlById/:id')
  // findGirlById(@Request() req): any {
  //   let id: number = parseInt(req.params.id);
  //   return this.girlService.getGirlById(id);
  // }

  // @Get('/findGirlById/:id/:name')
  // findGirlById(@Request() req): any {
  //   console.log(req.params.name);
  //   let id: number = parseInt(req.params.id);
  //   return this.girlService.getGirlById(id);
  // }

  // @Get('/findGirlById/:id/:name')
  // findGirlById(@Param() params): any {
  //   console.log(params.name);
  //   let id: number = parseInt(params.id);
  //   return this.girlService.getGirlById(id);
  // }

  // @Get('/findGirlById/:id/:name')
  // findGirlById(@Param() params, @Headers() header): any {
  //   console.log(params.name);
  //   console.log(header);
  //   let id: number = parseInt(params.id);
  //   return this.girlService.getGirlById(id);
  // }

  @Get('/add')
  addGirl(@Body() body): any {
    console.log(body);
    return this.girlService.addGirl();
    return `success`;
  }

  @Get('/delete/:id')
  deleteGirl(@Param() params): any {
    console.log(params.id, 'controller');
    let id: number = params.id;
    return this.girlService.delGirl(id);
  }

  @Get('/update/:id')
  updateGirl(@Param() params): any {
    let id: number = params.id;
    return this.girlService.updateGirl(id);
  }

  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }

  @Get('/findGirlByName/:name')
  findGirlByName(@Param() params): any {
    console.log(params.name);
    let name: string = params.name;
    return this.girlService.getGirlByName(name);
  }

  //this.girlService = new GirlService();

  //.......33
}
