import { DatasiteClientInterface } from './datasite.client.interface';
import { ProjectMembershipInterface } from '../interfaces/projectMembership.interface';
import { RegisteredUserInterface } from '../interfaces/registeredUser.interface';
import { UnregisteredUserInterface } from '../interfaces/unregisteredUser.interface';
import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class DatasiteClient implements DatasiteClientInterface {
  constructor(private httpService: HttpService) {}

  async getProjectMemberships(): Promise<ProjectMembershipInterface[]> {
    const response = await this.httpService.get('projectmemberships').toPromise();
    return response.data;
  }

  async getRegisteredUsers(): Promise<RegisteredUserInterface[]> {
    const response = await this.httpService.get('registeredusers').toPromise();
    return response.data;
  }

  async getUnregisteredUsers(): Promise<UnregisteredUserInterface[]> {
    const response = await this.httpService.get('unregisteredusers').toPromise();
    return response.data;
  }
}
