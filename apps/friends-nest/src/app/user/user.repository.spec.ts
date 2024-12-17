import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

jest.mock('./user.service');

describe('UserService', () => {
  let service: UserService;

  const DefaultUser: User = {
    username: 'john',
    password: 'Test1234',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@dispostable.com',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '1',
    salt: 'salt',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
