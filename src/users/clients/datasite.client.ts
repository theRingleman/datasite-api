import { DatasiteClientInterface } from './datasite.client.interface';
import { ProjectMembershipInterface } from '../interfaces/projectMembership.interface';
import { RegisteredUserInterface } from '../interfaces/registeredUser.interface';
import { UnregisteredUserInterface } from '../interfaces/unregisteredUser.interface';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class DatasiteClient implements DatasiteClientInterface {
  constructor(private httpService: HttpService) {}

  getProjectMemberships(): Observable<
    AxiosResponse<ProjectMembershipInterface[]>
  > {
    return this.httpService.get('projectmemberships');
  }

  getRegisteredUsers(): Observable<AxiosResponse<RegisteredUserInterface[]>> {
    return this.httpService.get('registeredusers');
  }

  getUnregisteredUsers(): Observable<
    AxiosResponse<UnregisteredUserInterface[]>
  > {
    return this.httpService.get('unregisteredusers');
  }
}
