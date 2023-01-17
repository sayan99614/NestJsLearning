import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Address } from './address.entity';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async createAddress(address: string): Promise<Address> {
    const addr = new Address();
    addr.address = address;
    return this.addressRepository.save(addr);
  }
}
