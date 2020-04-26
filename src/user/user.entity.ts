import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from 'typeorm';
import { UserSetting } from 'src/user-setting/user-setting.entity';

@Entity()
@Index(['channel'])
@Index(['channel', 'id'], { unique: true })

export class User {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  channel: string;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  gender: string;

  @Column()
  target: string;

  @Column('text')
  public dataJson?: string;

  public get data(): any {
    if (this.dataJson) return JSON.parse(this.dataJson);
    else return null;
  }

  public set data(data: any) {
    if (data) this.dataJson = JSON.stringify(data);
    else this.data = null;
  }

  @OneToMany(type => UserSetting, userSetting => userSetting.user)
  settings: UserSetting[];
}