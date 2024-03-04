import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { CreateStudentDto } from './dtos/create-student.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';

@Controller('admin')
export class AdminController {
  constructor(public adminService: AdminService) {}

  @Get()
  @ApiOkResponse({
    description: 'Get name of system admin.',
  })
  async getAdminName() {
    const adminName = await this.adminService.getAdminName();
    return adminName;
  }

  @Post('create_course')
  @ApiBody({ type: CreateCourseDto })
  async createCourse(@Body() body: CreateCourseDto) {
    const course = await this.adminService.createCourse(body);
    return course;
  }

  @Post('create_professor')
  @ApiBody({ type: CreateProfessorDto })
  async createProfessor(@Body() body: CreateProfessorDto) {
    const professor = await this.adminService.createProfessor(body);
    return professor;
  }

  @Post('create_student')
  @ApiBody({ type: CreateStudentDto })
  async createStudent(@Body() body: CreateStudentDto) {
    const student = await this.adminService.createStudent(body);
    return student;
  }
}
