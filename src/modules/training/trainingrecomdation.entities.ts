import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'training_recommendations',
})
export class TrainingRecommendation {
  @PrimaryGeneratedColumn({
    name: 'training_recommendation_id',
    type: 'int4',
  })
  id: number;

  @Column({
    name: 'request_source_type_id',
    type: 'int4',
  })
  requestSourceTypeId: number;
  @Column({
    name: 'request_date_time',
    type: 'int4',
  })
  requestDateTime: number;
  @Column({
    name: 'training_repository_id',
    type: 'int4',
  })
  trainingRepositoryId: number;
  @Column({
    name: 'recommender_user_id',
    type: 'int4',
  })
  recommenderUserId: number;
  @Column({
    name: 'for_user_id',
    type: 'int4',
  })
  forUserId: number;
  @Column({
    name: 'recommender_reason_id',
    type: 'int4',
  })
  recommenderReasonId: number;
  @Column({
    name: 'recommender_remarks',
    type: 'varchar',
  })
  recommenderRemarks: string;
  @Column({
    name: 'training_urgency_id',
    type: 'int4',
  })
  trainingUrgencyId: number;
  @Column({
    name: 'finish_by_plan_period_id',
    type: 'int4',
  })
  finishByPlanPeriodId: number;
  @Column({
    name: 'proposed_schedule_month_week',
    type: 'varchar',
  })
  proposedScheduleMonthWeek: string;
  @Column({
    name: 'recommend_plan_in_batch_id',
    type: 'int4',
  })
  recommendedPlanInBatchId: number;
  @Column({
    name: 'approved_plan_in_batch_id',
    type: 'int4',
  })
  approvedPlanInBatchId: number;
  @Column({
    name: 'recommend_status_id',
    type: 'int4',
  })
  recommendedStatusId: number;
  @Column({
    name: 'schedule_status_id',
    type: 'int4',
  })
  scheduleStatusId: number;
  @Column({
    name: 'approver_manager_user_id',
    type: 'int4',
  })
  approverManagerUserId: number;
  @Column({
    name: 'management_approver_user_id',
    type: 'int4',
  })
  managementApproverUserId: number;
  @Column({
    name: 'approver_manager_remarks',
    type: 'varchar',
  })
  approverManagerRemarks: string;
  @Column({
    name: 'management_approver_remarks',
    type: 'varchar',
  })
  managementApproverRemarks: string;
  @Column({
    name: 'approver_manager_action_date_time',
    type: 'timestamp',
  })
  approverManagerActionDateTime: Date;
  @Column({
    name: 'management_manager_action_date_time',
    type: 'timestamp',
  })
  managementManagerActionDateTime: Date;
}
