import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne} from 'typeorm';
import {User} from '../user/user.entity';

@Entity()
@Index(['user'])

export class UserSetting {

  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => User, user => user.settings)
  user: User;

  @Column()
  key: string;

  @Column('text')
  value: string;

}