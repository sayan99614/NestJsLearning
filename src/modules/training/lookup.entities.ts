import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'lookups',
})
export class LookUp {
  @PrimaryColumn({
    name: 'lookup_id',
    type: 'int4',
  })
  id: number;
  @Column({
    name: 'table_name',
    type: 'varchar',
  })
  tableName: string;
  @Column({
    name: 'display_order',
    type: 'int4',
  })
  displayOrder: number;
  @Column({
    name: 'display_text',
    type: 'varchar',
  })
  displayText: string;
  @Column({
    name: 'is_active',
    type: 'boolean',
  })
  isActive: boolean;
  @Column({
    name: 'parent_id',
    type: 'int4',
  })
  parentId: number;
  @Column({
    name: 'internal_key',
    type: 'int4',
  })
  internalKey: number;
  @Column({
    name: 'concurrency_key',
    type: 'int4',
  })
  concurrencyKey: number;
  @Column({
    name: 'create_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
  @Column({
    name: 'create_user_id',
    type: 'int4',
  })
  ctreateUserId: number;
  @Column({
    name: 'update_date',
    type: 'date',
  })
  updateDate: Date;
  @Column({
    name: 'update_user_id',
    type: 'int4',
  })
  updateUserId: number;
  @Column({
    name: 'value_text',
    type: 'varchar',
  })
  valueText: string;
}
