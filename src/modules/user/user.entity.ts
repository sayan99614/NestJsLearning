import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { Photo } from '../photos/photos.entities';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'char',
    length: 15,
  })
  name: string;
  @Column({
    type: 'char',
    length: 50,
    unique: true,
  })
  email: string;
  @Column({
    type: 'char',
    length: 15,
  })
  password: string;

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Photo, (photo) => photo.user)
  @JoinColumn()
  photos: Photo[];
}
