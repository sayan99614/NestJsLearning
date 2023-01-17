import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'training_repositories' })
export class TrainingRepositories {
  @PrimaryColumn({
    name: 'training_repository_id',
    type: 'int4',
  })
  id: number;

  @Column({
    name: 'training_short_code',
    type: 'varchar',
  })
  code: string;

  @Column({
    name: 'training_title',
    type: 'varchar',
  })
  title: string;
  @Column({
    name: 'training_short_summary',
    type: 'varchar',
  })
  summary: string;

  @Column({
    name: 'training_objective_remarks',
    type: 'varchar',
  })
  objectiveRemarks: string;

  @Column({
    name: 'training_goal_remarks',
    type: 'varchar',
  })
  goalRemarks: string;

  @Column({
    name: 'training_method_id',
    type: 'int4',
  })
  trainingMethodId: number;
  @Column({
    name: 'training_mode_id',
    type: 'int4',
  })
  trainingModeId: number;
  @Column({
    name: 'training_group_id',
    type: 'int4',
  })
  trainingGroupId: number;
  @Column({
    name: 'training_category_id',
    type: 'int4',
  })
  trainingCategoryId: number;
  @Column({
    name: 'training_type_id',
    type: 'int4',
  })
  trainingTypeId: number;
  @Column({
    name: 'training_complexity_level_id',
    type: 'int4',
  })
  trainingComplexitylevelId: number;
  @Column({
    name: 'training_target_skill_id',
    type: 'int4',
  })
  trainingTargerSkillId: number;
  @Column({
    name: 'training_target_audience_list',
    type: 'varchar',
  })
  audienceList: string;

  @Column({
    name: 'training_occurance_id',
    type: 'int4',
  })
  trainingOccouranceId: number;

  @Column({
    name: 'training_readiness_status_id',
    type: 'int4',
  })
  trainingReadinessStatusId: number;
  @Column({
    name: 'training_assessment_need_id',
    type: 'int4',
  })
  trainingAssesmentNeedId: number;
  @Column({
    name: 'training_assessment_format_id',
    type: 'int4',
  })
  trainingAssesmentFormatId: number;
  @Column({
    name: 'training_assessment_readiness_status_id',
    type: 'int4',
  })
  trainingAssesmentReadinessStatusId: number;

  @Column({
    name: 'lms_source_url',
    type: 'varchar',
  })
  lmsSourceUrl: string;
  @Column({
    name: 'require_pre_evaluation',
    type: 'varchar',
  })
  requirePreEvaluation: string;
  @Column({
    name: 'require_post_evaluation',
    type: 'varchar',
  })
  requirePostEvaluation: string;
  @Column({
    name: 'lms_pre_test_url',
    type: 'varchar',
  })
  lmsPreTestUrl: string;
  @Column({
    name: 'lms_post_test_url',
    type: 'varchar',
  })
  lmsPostTestUrl: string;

  @Column({
    name: 'primary_owner_group_id',
    type: 'int4',
  })
  primaryOnerGroupId: number;
  @Column({
    name: 'secondary_owner_group_id',
    type: 'int4',
  })
  seconderyOnerGroupId: number;
  @Column({
    name: 'governing_group_id',
    type: 'int4',
  })
  governingOnerGroupId: number;

  @Column({
    name: 'trainer_group_list',
    type: 'varchar',
  })
  trainerGroupList: string;

  @Column({
    name: 'trainer_qualification_remarks',
    type: 'varchar',
  })
  trainerQualification: string;

  @Column({
    name: 'total_training_hours',
    type: 'int4',
  })
  totalHours: number;

  @Column({
    name: 'training_material_remarks',
    type: 'varchar',
  })
  materialRemarks: string;

  @Column({
    name: 'training_material_budget_amount',
    type: 'int4',
  })
  materialBudgetAmmount: number;

  @Column({
    name: 'target_project_id_list',
    type: 'varchar',
    nullable: true,
  })
  targetProjectIdList: string;

  @Column({
    name: 'target_department_id_list',
    type: 'varchar',
    nullable: true,
  })
  targetDepartmentIdList: string;

  @Column({
    name: 'max_people_in_batch_count',
    type: 'int4',
  })
  maxPeopleInBatch: number;

  @Column({
    name: 'training_nature_id',
    type: 'int4',
  })
  trainingNatureId: number;
}
