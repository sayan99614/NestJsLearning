export class TrainingDto {
  trainingShortCode: string;
  trainingTitle: string;
  trainingSummary: string;
  trainingTargetAudiance: string;
  requirePreEvaluation: 'Yes' | 'No';
  requirePostEvaluation: 'Yes' | 'No';
  totalTrainingHours: number;
  trainingMaterialRemarks: string;
  maxPeople: number;
  trainingObjective: string;
}
