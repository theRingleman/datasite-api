import { UnregisteredUserInterface } from './unregisteredUser.interface';
import { RegisteredUserInterface } from './registeredUser.interface';

export interface CombinedUnregisteredUsersAndProjectInterface extends UnregisteredUserInterface {
  projectIds: string[];
}

export interface CombinedRegisteredUsersAndProjectInterface extends RegisteredUserInterface {
  projectIds: string[];
}
