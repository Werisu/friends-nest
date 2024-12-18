import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { IsStrongPassword } from '../../../../src/common/decorators/is-strong-password';
import { UserCreatableInterface } from '../interfaces';

export class CreateUserDto implements UserCreatableInterface {
  @ApiProperty({
    description: 'Username',
    example: 'username',
    type: String,
    required: true,
  })
  @IsString()
  username!: string;

  @ApiProperty({
    description: 'Password',
    example: 'Password1234',
    type: String,
    required: true,
  })
  @IsString()
  @IsStrongPassword()
  password!: string;

  @ApiProperty({
    description: 'First name',
    example: 'John',
    type: String,
    required: true,
  })
  @IsString()
  firstName!: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Doe',
    type: String,
    required: true,
  })
  @IsString()
  lastName!: string;

  @ApiProperty({
    description: 'Email',
    example: 'john@dispostable.com',
    type: String,
    required: true,
  })
  @IsString()
  @IsEmail()
  email!: string;
}
