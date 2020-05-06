import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne} from 'typeorm';
import {User} from '../user/user.entity';

@Entity()
@Index(['user'])
@Index(['user', 'autoload'])
@Index(['user', 'key'], { unique: true })

export class UserSetting {

  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => User)
  user: User;

  @Column()
  key: string;

  @Column('text')
  valueJson: string;

  public get value(): any {
    if (this.valueJson) return JSON.parse(this.valueJson);
    else return null;
  }

  public set value(data: any) {
    if (data) this.valueJson = JSON.stringify(data);
    else this.value = null;
  }

}