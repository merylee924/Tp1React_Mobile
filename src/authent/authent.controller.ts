import { Body, Controller, Post } from "@nestjs/common";
import { AuthentService } from "./authent.service";

@Controller('authent')
export class AuthentController {
  constructor(private readonly authentservice : AuthentService) {
  }

  @Post('/adduser')
  addUser(@Body() body:({username: string; password: string})) :string {
    return this.authentservice.addUser(body.username, body.password);
  }

  @Post('/login')
  login(@Body() body:{username: string; password: string}) :string {
    return this.authentservice.login(body.username, body.password);
  }
}



