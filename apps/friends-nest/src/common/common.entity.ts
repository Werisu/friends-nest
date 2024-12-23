import { ApiProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CommonEntityInterface } from '../common/interfaces/common-entity.interface';

export abstract class CommonEntity implements CommonEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt!: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt!: Date;
}
