import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photoes.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post()
  createPhoto(@Body() photo) {
    return this.photoService.create(photo.url, photo.userId * 1);
  }
  @Get()
  getAllPhoto() {
    return this.photoService.findAll();
  }
}
