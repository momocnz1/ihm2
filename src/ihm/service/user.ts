import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../entities/user';
import { Repository } from 'typeorm';
import { CreateuserDTO,UpdateuserDTO } from '../ihm.dto';


@Injectable()
 export default class UserService {
     getstatus() : string{
       return "OK";
     }
     constructor(
       @InjectRepository(User)
       private userRepository : Repository<User>
     ){}
     findAll() : Promise<User[]>{
       return this.userRepository.find();
     }
     findOne(id : number) : Promise<User | null>{
       return this.userRepository.findOneBy({id:id});
     }
     creat(user : CreateuserDTO) : Promise<User | null>{
       return this.userRepository.save(user);
     }
     async update(id: number, update : UpdateuserDTO) : Promise<User | null>{
       const usertoUpdate = await this.userRepository.findOne({ where: { id: id } });
       if (!usertoUpdate) {
         throw new NotFoundException('User not found');
       }
       usertoUpdate.fname = update.fname;
       usertoUpdate.lname = update.lname;
       usertoUpdate.email = update.email;
       usertoUpdate.phone = update.phone;
       usertoUpdate.address = update.address;
       return await this.userRepository.save(usertoUpdate);
     }
     async DeleteQuryBuilder(id : number) : Promise<void>{
       await this.userRepository.delete({id:id})
     }
 }