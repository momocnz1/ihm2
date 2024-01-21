import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import PostNotificationService from '../service/postNotification'
import { UpdatenotificationDTO } from '../ihm.dto';
import PostNotification from '../entities/postNotification';

@Controller('postNotification')
export default class PostNotificationController {
  constructor(private readonly postNotificationService: PostNotificationService) {}

  @Get('status')
  getStatus() : string{
    return this.postNotificationService.getstatus();
  }
  @Get()
  getIndex(@Req() request : Request): Promise<PostNotification[]> {
    return this.postNotificationService.findAll();
  }
  @Get(':id')
    getByid(@Param('id') id : number) : Promise<PostNotification>{
        return this.postNotificationService.findOne(id)
    }
  @Put(":id")
    updateUserById(@Param('id') id: number, @Body() updatenotificationDTO: UpdatenotificationDTO): Promise<PostNotification> {
      return this.postNotificationService.update(id, updatenotificationDTO);
  }
  @Delete(":id")
  deleteuserById(@Param('id') id :number) : string{
    this.postNotificationService.DeleteQuryBuilder(id)
    return "OK,It's done."
  }
}