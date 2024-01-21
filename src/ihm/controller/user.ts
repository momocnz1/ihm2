import { Body,Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import User from "../entities/user";
import { CreateuserDTO, UpdateuserDTO } from "../ihm.dto";
import  UserService  from "../service/user";


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('status')
  getStatus() : string{
    return this.userService.getstatus();
  }
  @Get()
  getIndex(@Req() request : Request): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
    getByid(@Param('id') id : number) : Promise<User>{
        return this.userService.findOne(id)
    }
  @Put(":id")
    updateUserById(@Param('id') id: number, @Body() updateuserDTO: UpdateuserDTO): Promise<User> {
      return this.userService.update(id, updateuserDTO);
      
  }
  @Post()
  postCreat(@Body() createuserDTO : CreateuserDTO): Promise<User>{
    return this.userService.creat(createuserDTO)
  }
  @Delete(":id")
  deleteuserById(@Param('id') id :number) : string{
    this.userService.DeleteQuryBuilder(id)
    return "OK,It's done."
  }
}