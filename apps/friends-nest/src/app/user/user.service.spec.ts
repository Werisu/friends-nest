import { BadRequestException } from '@nestjs/common';
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

  describe(UserService.prototype.create, () => {
    it('should create a new user', async () => {
      jest.spyOn(service, 'create').mockReturnValue(DefaultUser);

      const user = service.create(DefaultUser);

      expect(user).toEqual(DefaultUser);
      expect(service.create).toHaveBeenCalledWith(DefaultUser);
    });

    it('should be failed', () => {
      jest.spyOn(service, 'create').mockImplementation(() => {
        throw new BadRequestException();
      });
      const t = () => service.create(DefaultUser);
      expect(t).toThrow(BadRequestException);
    });
  });

  describe(UserService.prototype.findAll, () => {
    it('should return all users', async () => {
      service.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe(UserService.prototype.findOne, () => {
    it('should return a user', async () => {
      const id = 'test';
      service.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe(UserService.prototype.update, () => {
    it('should update a user', async () => {
      const id = 'test';
      const updateUserDto = {
        firstName: 'test',
        lastName: 'test',
      };
      service.update(id, updateUserDto);
      expect(service.update).toHaveBeenCalledWith(id, updateUserDto);
    });
  });

  describe(UserService.prototype.remove, () => {
    it('should remove a user', async () => {
      const id = 'test';
      service.remove(id);
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
