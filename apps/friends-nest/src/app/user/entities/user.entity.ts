import { Column, Entity, Unique } from 'typeorm';
import { CommonEntity } from '../../../common/common.entity';
import { UserInterface } from '../interfaces';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class User extends CommonEntity implements UserInterface {
  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  salt: string;

  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ default: true, nullable: false })
  active: boolean;

  // @OneToMany(() => UserRole, userRole => userRole.user)
  // userRoles: UserRole[];

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;
}
