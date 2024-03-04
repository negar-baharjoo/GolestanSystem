import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateProfessorDto {
  @ApiProperty({ type: String, description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ type: String, description: 'email' })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ type: String, description: 'password' })
  @IsString()
  @Length(5, 20)
  password: string;
}
