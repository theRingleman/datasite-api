import { DatasiteClientInterface } from './datasite.client.interface';
import { Test, TestingModule } from '@nestjs/testing';
import { DatasiteClient } from './datasite.client';
import { HttpModule, HttpService } from '@nestjs/common';
import registeredUserMock from '../__mocks__/registeredUser.mock';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { RegisteredUserInterface } from '../interfaces/registeredUser.interface';
import unregisteredUserMock from '../__mocks__/unregisteredUser.mock';
import { UnregisteredUserInterface } from '../interfaces/unregisteredUser.interface';
import { ProjectMembershipInterface } from '../interfaces/projectMembership.interface';
import projectMembershipsMock from '../__mocks__/projectMemberships.mock';

describe('DatasiteClient', () => {
  let client: DatasiteClientInterface;
  let httpService: HttpService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [DatasiteClient],
    }).compile();

    httpService = app.get(HttpService);
    client = app.get(DatasiteClient);
  });

  describe('getRegisteredUsers', () => {
    it('should return a list of registered users', async () => {
      const response: AxiosResponse<RegisteredUserInterface[]> = {
        data: [registeredUserMock],
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(response))

      await client.getRegisteredUsers();

      expect(httpService.get).toBeCalled();
      expect(httpService.get).toHaveBeenCalledWith('registeredusers');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });

  describe('getUnregisteredUsers', () => {
    it('should return a list of unregistered users', async () => {
      const response: AxiosResponse<UnregisteredUserInterface[]> = {
        data: [unregisteredUserMock],
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(response))
      await client.getUnregisteredUsers();

      expect(httpService.get).toBeCalled();
      expect(httpService.get).toHaveBeenCalledWith('unregisteredusers');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });

  describe('getProjectMemberships', () => {
    it('should return a list of project memberships', async () => {
      const response: AxiosResponse<ProjectMembershipInterface[]> = {
        data: projectMembershipsMock,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(response))
      await client.getProjectMemberships();

      expect(httpService.get).toBeCalled();
      expect(httpService.get).toHaveBeenCalledWith('projectmemberships');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });
});
