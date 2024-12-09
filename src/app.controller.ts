import { Controller, Get,Post,Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post('/login')
  postLogin(@Query('username') username: string): string {
    return this.appService.postLogin(username);
  }
}
