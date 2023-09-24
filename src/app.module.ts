import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { ExampleModule } from './example/example.module';
import { ExampleController } from './example/controllers/example.controller';

@Module({
  imports: [
    ExampleModule,
    RouterModule.register([
      {
        path: 'example',
        module: ExampleModule,
      },
    ]),
  ],
  controllers: [ExampleController],
})
export class AppModule {}
