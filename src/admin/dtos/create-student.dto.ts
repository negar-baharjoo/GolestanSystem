import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString, Length } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ type: String, description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ type: String, description: 'email' })
  @IsEmail()
  email: string;

  @ApiProperty({ type: Number, description: 'capacity' })
  @IsInt()
  capacity: number;

  @ApiProperty({ type: String, description: 'password' })
  @IsString()
  @Length(5, 20)
  password: string;
}
