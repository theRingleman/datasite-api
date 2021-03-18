import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatasiteClient } from './clients/datasite.client';
import { HttpModule } from '@nestjs/common';
import registeredUserMock from './__mocks__/registeredUser.mock';
import unregisteredUserMock from './__mocks__/unregisteredUser.mock';
import projectMembershipsMock from './__mocks__/projectMemberships.mock';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [UsersService, DatasiteClient],
      controllers: [UsersController],
    }).compile();

    service = module.get<UsersService>(UsersService);
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsersAndProjects', () => {
    it('should call its service to get users and projects', async () => {
      const combinedUsersAndProjectMock = jest.spyOn(service, 'getCombinedUsersAndProjects');
      const unregisteredUsersMock = jest.spyOn(service, 'getUnregisteredUsers').mockResolvedValueOnce([unregisteredUserMock]);
      const registeredUsersMock = jest.spyOn(service, 'getRegisteredUsers').mockResolvedValueOnce([registeredUserMock]);
      const projectsMock = jest.spyOn(service, 'getProjectMemberships').mockResolvedValueOnce(projectMembershipsMock);

      await controller.getUsersAndProjects();

      expect(combinedUsersAndProjectMock).toHaveBeenCalledTimes(1);
      expect(unregisteredUsersMock).toHaveBeenCalledTimes(1);
      expect(registeredUsersMock).toHaveBeenCalledTimes(1);
      expect(projectsMock).toHaveBeenCalledTimes(1);
    });
  })
});
