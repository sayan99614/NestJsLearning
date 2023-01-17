import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrainingDto } from './dtos/TrainingDto';
import { TrainingService } from './training.service';
@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  async cteateTraning(@Body() training: TrainingDto) {
    return await this.trainingService.createTraining(training);
  }

  @Get()
  async getAlltraining() {
    return await this.trainingService.getAllTraining();
  }

  @Get('methods')
  async getTrainingMethods() {
    return await this.trainingService.getTrainingMethos();
  }

  @Get('modes')
  async getTrainingModes() {
    return await this.trainingService.getTrainingModes();
  }
}
