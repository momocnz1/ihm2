import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import Post from "./post";
import PostNotification from "./postNotification";



@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fname: string;

    @Column()
    lname: string;

    @Column({nullable:true})
    username: string;

    @Column({nullable:true})
    email: string;

    @Column({nullable:true})
    password : string;

    @Column()
    phone: number;

    @Column()
    address: string;
    
    @OneToMany(() => PostNotification, (notification) => notification.user)
    notifications: PostNotification[];

}