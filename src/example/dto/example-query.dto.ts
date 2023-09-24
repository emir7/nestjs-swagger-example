import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ExampleQueryDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'test',
  })
  public test: string;
}
