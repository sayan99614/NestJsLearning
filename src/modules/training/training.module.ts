import { Module } from '@nestjs/common';
import { TrainingController } from './training.controller';
import { TrainingService } from './training.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingRepositories } from './training.entity';
import { LookUp } from './lookup.entities';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingRepositories, LookUp])],
  controllers: [TrainingController],
  providers: [TrainingService],
})
export class TrainingModule {}
