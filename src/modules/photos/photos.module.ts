import { Module } from '@nestjs/common';
import { PhotoController } from './photos.controller';
import { PhotoService } from './photoes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photos.entities';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), UserModule],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
