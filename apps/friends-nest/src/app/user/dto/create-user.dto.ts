import { IsEmail, IsString } from 'class-validator';
import { IsStrongPassword } from '../../../../src/common/decorators/is-strong-password';
import { UserCreatableInterface } from '../interfaces';

export class CreateUserDto implements UserCreatableInterface {
  @IsString()
  username!: string;
  @IsString()
  @IsStrongPassword()
  password!: string;
  @IsString()
  firstName!: string;
  @IsString()
  lastName!: string;
  @IsString()
  @IsEmail()
  email!: string;
}
