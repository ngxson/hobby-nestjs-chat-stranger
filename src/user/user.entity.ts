import {Entity, PrimaryGeneratedColumn, Column, Index} from 'typeorm';

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

  @Column()
  interest: JSON;

  @Column()
  data: JSON;

}