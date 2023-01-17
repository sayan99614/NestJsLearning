import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photos.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
    private readonly userService: UserService,
  ) {}

  async create(url: string, userId: number): Promise<Photo> {
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException('invalid user for the photo');
    }
    const photo = new Photo();
    photo.imageUrl = url;
    photo.user = user;
    return this.photoRepository.save(photo);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find({
      relations: {
        user: true,
      },
    });
  }
}
