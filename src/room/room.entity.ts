import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()

export class Room {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  created: Date;

  @OneToMany(type => User, user => user.room)
  settings: User[];
}