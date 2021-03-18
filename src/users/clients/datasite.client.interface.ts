import { RegisteredUserInterface } from '../interfaces/registeredUser.interface';
import { UnregisteredUserInterface } from '../interfaces/unregisteredUser.interface';
import { ProjectMembershipInterface } from '../interfaces/projectMembership.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

export interface DatasiteClientInterface {
  getRegisteredUsers(): Observable<AxiosResponse<RegisteredUserInterface[]>>;
  getUnregisteredUsers(): Observable<AxiosResponse<UnregisteredUserInterface[]>>;
  getProjectMemberships(): Observable<AxiosResponse<ProjectMembershipInterface[]>>;
}
