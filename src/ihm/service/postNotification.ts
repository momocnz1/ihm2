import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatenotificationDTO } from '../ihm.dto';
import PostNotification from '../entities/postNotification';

@Injectable()
 export default class PostNotificationService {
   constructor(
     @InjectRepository(PostNotification)
     private notificationRepository: Repository<PostNotification>,
   ) {}
   getstatus() : string{
     return "OK";
   }
   findAll() : Promise<PostNotification[]>{
     return this.notificationRepository.find();
   }
   findOne(id : number) : Promise<PostNotification | null>{
     return this.notificationRepository.findOneBy({id:id});
   }
  
   async update(id: number, update: UpdatenotificationDTO): Promise<PostNotification | null> {
     const notificationToUpdate = await this.notificationRepository.findOne({ where: { id: id } });
  
     if (!notificationToUpdate) {
       throw new NotFoundException('Notification not found');
     }
     notificationToUpdate.content = update.content;
     return this.notificationRepository.save(notificationToUpdate);
   }
  
   async DeleteQuryBuilder(id: number) : Promise<void>{
     await this.notificationRepository.delete({id:id})
   }
 }