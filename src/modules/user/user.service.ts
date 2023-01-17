import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressService } from '../address/address.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly addressService: AddressService,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: {
        address: true,
        photos: true,
      },
    });
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async createOne(user: UserDto): Promise<User> {
    const newUser = new User();

    try {
      const address = await this.addressService.createAddress(user.address);
      newUser.email = user.email;
      newUser.name = user.name;
      newUser.password = user.password;
      newUser.address = address;
      return this.usersRepository.save(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
