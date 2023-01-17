import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TrainingRepositories } from './training.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingDto } from './dtos/TrainingDto';
import { LookUp } from './lookup.entities';
@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(TrainingRepositories)
    private trainingRepository: Repository<TrainingRepositories>,

    @InjectRepository(LookUp)
    private lookupRepository: Repository<LookUp>,
  ) {}

  async createTraining(training: TrainingDto): Promise<TrainingRepositories> {
    const newTraining = this.trainingRepository.create({
      title: training.trainingTitle,
      audienceList: training.trainingTargetAudiance,
      maxPeopleInBatch: training.maxPeople,
      materialRemarks: training.trainingMaterialRemarks,
      requirePreEvaluation: training.requirePreEvaluation,
      requirePostEvaluation: training.requirePostEvaluation,
      summary: training.trainingSummary,
      code: training.trainingShortCode,
      objectiveRemarks: training.trainingObjective,
      totalHours: training.totalTrainingHours,
    });
    return this.trainingRepository.save(newTraining);
  }

  async getAllTraining(): Promise<TrainingRepositories[]> {
    return this.trainingRepository.find();
  }

  async getTrainingMethos() {
    const result = this.lookupRepository.find({
      where: { tableName: 'training_methods' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
    return result;
  }
  async getTrainingModes() {
    return this.lookupRepository.find({
      where: {
        tableName: 'training_mode_types',
      },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }

  async getTrainingTypes() {
    return this.lookupRepository.find({
      where: { tableName: 'training_types' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }
  async getTrainingNatures() {
    return this.lookupRepository.find({
      where: { tableName: 'training_natures' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }
  async getTrainingSkillCategories() {
    return this.lookupRepository.find({
      where: { tableName: 'training_skill_categories' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }
  async getTrainingComplixityLevel() {
    return this.lookupRepository.find({
      where: { tableName: 'training_complexity_levels' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }
  async getTrainingOccourances() {
    return this.lookupRepository.find({
      where: { tableName: 'training_occurances' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }

  async getTrainingTargetAudiance() {
    return this.lookupRepository.find({
      where: { tableName: 'training_target_audiences' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }

  async getTrainingReadiness() {
    return this.lookupRepository.find({
      where: { tableName: 'training_readiness_statuses' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }

  async getTrainingEvaluationContentReadiness() {
    return this.lookupRepository.find({
      where: { tableName: 'training_evaluation_content_readinesses' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }
  async getTrainingAssesmentNeed() {
    return this.lookupRepository.find({
      where: { tableName: 'training_assessment_needs' },
      select: [
        'id',
        'displayText',
        'displayOrder',
        'isActive',
        'valueText',
        'concurrencyKey',
        'internalKey',
        'isActive',
      ],
    });
  }
}
