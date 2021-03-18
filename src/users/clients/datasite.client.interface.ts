import { RegisteredUserInterface } from '../interfaces/registeredUser.interface';
import { UnregisteredUserInterface } from '../interfaces/unregisteredUser.interface';
import { ProjectMembershipInterface } from '../interfaces/projectMembership.interface';

export interface DatasiteClientInterface {
  getRegisteredUsers(): Promise<RegisteredUserInterface[]>;
  getUnregisteredUsers(): Promise<UnregisteredUserInterface[]>;
  getProjectMemberships(): Promise<ProjectMembershipInterface[]>;
}
