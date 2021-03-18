import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CombinedRegisteredUsersAndProjectInterface,
  CombinedUnregisteredUsersAndProjectInterface,
} from './interfaces/combinedUsersAndProject.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsersAndProjects(): Promise<
    (
      | CombinedRegisteredUsersAndProjectInterface
      | CombinedUnregisteredUsersAndProjectInterface
      )[]
    >{
    return this.usersService.getCombinedUsersAndProjects(
      await this.usersService.getRegisteredUsers(),
      await this.usersService.getUnregisteredUsers(),
      await this.usersService.getProjectMemberships()
    )
  }
}
