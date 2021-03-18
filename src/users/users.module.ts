import { HttpModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatasiteClient } from './clients/datasite.client';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://5c3ce12c29429300143fe570.mockapi.io/api/',
    }),
  ],
  providers: [UsersService, DatasiteClient],
  controllers: [UsersController],
})
export class UsersModule {}
