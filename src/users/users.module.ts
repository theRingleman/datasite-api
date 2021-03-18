import { HttpModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatasiteClient } from './clients/datasite.client'

@Module({
  imports: [HttpModule],
  providers: [
    UsersService,
    DatasiteClient
  ],
  controllers: [UsersController]
})
export class UsersModule {}
