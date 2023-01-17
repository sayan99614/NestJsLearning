import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'char',
    length: 200,
  })
  address: string;

  @OneToOne(() => User, (user) => user.address, {
    onDelete: 'CASCADE',
  })
  user: User;
}
