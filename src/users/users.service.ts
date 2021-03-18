import { Injectable } from '@nestjs/common';
import { RegisteredUserInterface } from './interfaces/registeredUser.interface';
import { UnregisteredUserInterface } from './interfaces/unregisteredUser.interface';
import { ProjectMembershipInterface } from './interfaces/projectMembership.interface';
import {
  CombinedRegisteredUsersAndProjectInterface,
  CombinedUnregisteredUsersAndProjectInterface,
} from './interfaces/combinedUsersAndProject.interface';
import { DatasiteClient } from './clients/datasite.client';

export type UserAndProjectIds = {
  [key: string]: {
    attributes: RegisteredUserInterface | UnregisteredUserInterface;
    projectIds: string[];
  };
};

@Injectable()
export class UsersService {
  constructor(private datasiteClient: DatasiteClient) {}

  public async getRegisteredUsers(): Promise<RegisteredUserInterface[]> {
    return this.datasiteClient.getRegisteredUsers();
  }

  public async getUnregisteredUsers(): Promise<UnregisteredUserInterface[]> {
    return this.datasiteClient.getUnregisteredUsers();
  }

  public async getProjectMemberships(): Promise<ProjectMembershipInterface[]> {
    return this.datasiteClient.getProjectMemberships();
  }

  public getCombinedUsersAndProjects(
    registeredUsers: RegisteredUserInterface[],
    unregisteredUsers: UnregisteredUserInterface[],
    projectMemberships: ProjectMembershipInterface[],
  ): (
    | CombinedRegisteredUsersAndProjectInterface
    | CombinedUnregisteredUsersAndProjectInterface
  )[] {
    const usersAndProjectHash: UserAndProjectIds = {};
    this.hashUser(registeredUsers, usersAndProjectHash);
    this.hashUser(unregisteredUsers, usersAndProjectHash);

    projectMemberships.forEach((membership) => {
      if (usersAndProjectHash.hasOwnProperty(membership.userId)) {
        usersAndProjectHash[membership.userId].projectIds.push(
          membership.projectId,
        );
      }
    });

    return Object.values(usersAndProjectHash).map((userAndProjects) => {
      return {
        ...userAndProjects.attributes,
        projectIds: userAndProjects.projectIds,
      };
    });
  }

  private hashUser = function (
    users: UnregisteredUserInterface[] | RegisteredUserInterface[],
    hash: {},
  ) {
    users.forEach((user) => {
      hash[user.id] = {
        attributes: user,
        projectIds: [],
      };
    });
  };
}
