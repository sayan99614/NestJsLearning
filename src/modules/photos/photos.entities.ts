import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'char',
    length: 400,
  })
  imageUrl: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
