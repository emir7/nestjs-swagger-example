import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

import { ExampleQueryDto } from '../dto/example-query.dto';

@Controller()
export class ExampleController {
  @Get()
  @ApiQuery({ type: ExampleQueryDto })
  public myRoute(@Query() exampleQueryDto: ExampleQueryDto) {
    return {
      m: 'ok',
    };
  }
}
