import {  IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateuserDTO{

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsNotEmpty()
    @IsString()
    lname: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    address: string;
    
}
export class UpdateuserDTO{

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsNotEmpty()
    @IsString()
    lname: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    address: string;

}
export class CreateadminDTO{

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsNotEmpty()
    @IsString()
    lname: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    address: string;
}
export class UpdateadminDTO{

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsNotEmpty()
    @IsString()
    lname: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    address: string;
}
export class CreatepostDTO{

    @IsNotEmpty()
    @IsString()
    title:string;
    
    @IsNotEmpty()
    @IsString()
    content: string;

}
export class UpdatepostDTO{

    @IsNotEmpty()
    @IsString()
    title:string;
    
    @IsNotEmpty()
    @IsString()
    content: string;

}

export  class CreateCommentDTO{
    @IsNotEmpty()
    @IsString()
    content: string;
}
export  class UpdateCommentDTO{
    @IsNotEmpty()
    @IsString()
    content: string;
}