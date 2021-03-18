import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { DatasiteClient } from './clients/datasite.client';
import registeredUserMock from './__mocks__/registeredUser.mock';
import unregisteredUserMock from './__mocks__/unregisteredUser.mock';
import projectMembershipsMock from './__mocks__/projectMemberships.mock';
import { HttpModule } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let client: DatasiteClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [UsersService, DatasiteClient],
    }).compile();

    service = module.get<UsersService>(UsersService);
    client = module.get<DatasiteClient>(DatasiteClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCombinedUsersAndProjects', () => {
    it('should return a mix of registered and unregistered users with their project ids included in the user object', async () => {
      const combined = service.getCombinedUsersAndProjects([registeredUserMock], [unregisteredUserMock], projectMembershipsMock)
      expect(combined).toHaveLength(2);
      combined.forEach(user => {
        expect(user).toHaveProperty('projectIds');
      })
    });
  })
});
