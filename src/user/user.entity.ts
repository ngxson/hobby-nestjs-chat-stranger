import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { UserSetting } from 'src/user-setting/user-setting.entity';
import { Room } from 'src/room/room.entity';

@Entity()
@Index(['channel'])
@Index(['channel', 'scopedId'], { unique: true })

export class User {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ nullable: false })
  channel: string;

  @Column({ nullable: false })
  scopedId: string;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  gender: string;

  @Column()
  target: string;

  @OneToOne(type => Room)
  @JoinColumn()
  room: Room;

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
}