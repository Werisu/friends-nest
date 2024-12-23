import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>
  ) {}

  /**
   * Method to convert dto to user entity
   * @param createUser dto
   * @returns User
   */
  private convertToUser(createUser: CreateUserDto): User {
    const user = new User();

    user.username = createUser.username;
    user.password = createUser.password;
    user.firstName = createUser.firstName;
    user.lastName = createUser.lastName;
    user.email = createUser.email;
    user.active = true;

    return user;
  }
  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    try {
      const user = this.repo.create(createUserDto);
      const dbUser = await this.repo.save(user);
      return plainToInstance(UserDto, dbUser);
    } catch (error) {
      throw new InternalServerErrorException('Error creating user');
    }
  }

  async findAll() {
    const users = await this.repo.find({
      // select: ['id', 'username', 'firstName', 'lastName', 'email', 'active'],
    });
    return plainToInstance(UserDto, users);
  }

  async findById(id: string) {
    const user = await this.repo.findOneBy({
      id: id,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findOne(id: string) {
    const user = await this.findById(id);
    return plainToInstance(UserDto, user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findById(id);
    const newUser: User = {
      ...user,
      ...updateUserDto,
    };
    this.repo.save(newUser);
    return plainToInstance(UserDto, newUser);
  }

  async remove(id: string) {
    const user = await this.findById(id);
    await this.repo.remove(user);
  }
}
