import { DatasiteClientInterface } from './datasite.client.interface';
import { Test, TestingModule } from '@nestjs/testing';
import { DatasiteClient } from './datasite.client';
import { HttpModule, HttpService } from '@nestjs/common';

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
      jest.spyOn(httpService, 'get');
      await client.getRegisteredUsers();

      expect(httpService.get).toBeCalled();
      expect(httpService.get).toHaveBeenCalledWith('registeredusers');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });

  describe('getUnregisteredUsers', () => {
    it('should return a list of unregistered users', async () => {
      jest.spyOn(httpService, 'get');
      await client.getUnregisteredUsers();

      expect(httpService.get).toBeCalled();
      expect(httpService.get).toHaveBeenCalledWith('unregisteredusers');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });

  describe('getProjectMemberships', () => {
    it('should return a list of project memberships', async () => {
      jest.spyOn(httpService, 'get');
      await client.getProjectMemberships();

      expect(httpService.get).toBeCalled();
      expect(httpService.get).toHaveBeenCalledWith('projectmemberships');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });
});
