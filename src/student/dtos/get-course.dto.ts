import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class GetCourseDto {
  @ApiProperty({ type: String, description: 'name' })
  @IsString()
  name?: string;

  @ApiProperty({ type: Number, description: 'id' })
  @IsInt()
  id: number;
}
