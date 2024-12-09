import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthentService {
 private users=[];
  addUser (username: string ,password: string){
    this.users.push({username: username, password: password});
    console.log(this.users);
    return "user added successfuly";
  }

  login(username: string ,password: string){
    {
      const user=this.users.find(user=>(
        user.username===username && user.password===password));
      return user ? 'connection ok':'bad credential';
    }

}


}
