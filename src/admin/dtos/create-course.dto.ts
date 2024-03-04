import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsString } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ type: String, description: 'course name' })
  @IsString()
  name: string;

  @ApiProperty({ type: Number, description: 'course unit' })
  @IsInt()
  unit: number;

  @ApiProperty({ type: Number, description: 'relevant professor id' })
  @IsInt()
  professorId: number;

  @ApiProperty({ type: Number, description: 'capacity' })
  @IsInt()
  capacity: number;

  @ApiProperty({ type: Object, description: 'pre courses' })
  @IsArray()
  preCourses: {
    name: string;
    unit: number;
    capacity: number;
    professorId: number;
  };
}
