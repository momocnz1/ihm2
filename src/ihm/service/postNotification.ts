import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
   async DeleteQuryBuilder(id: number) : Promise<void>{
     await this.notificationRepository.delete({id:id})
   }
 }