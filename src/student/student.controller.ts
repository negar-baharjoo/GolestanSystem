import { Body, Controller, Param, ParseIntPipe, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { GetCourseDto } from './dtos/get-course.dto';
import { DeleteCourseDto } from './dtos/delete-course.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('student')
export class StudentController {
  constructor(public studentService: StudentService) {}

  @Put('/:id/weekly_schedule')
  @ApiParam({
    type: Number,
    description: 'weekly schedule',
    name: 'id',
  })
  async weeklySchedule(@Param('id', ParseIntPipe) id: number) {
    const schedule = await this.studentService.weeklySchedule(id);
    return schedule;
  }

  @Put('/:id/get_course')
  @ApiParam({
    type: Number,
    description: 'get course in a semester',
    name: 'id',
  })
  @ApiBody({
    type: GetCourseDto,
    description: 'get course in a semester',
  })
  async getCourse(
    @Body() body: GetCourseDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const course = await this.studentService.getCourse(body, id);
    return course;
  }

  @Put('/:id/delete_course')
  @ApiParam({
    type: Number,
    description: 'delete a course',
    name: 'id',
  })
  @ApiBody({
    type: DeleteCourseDto,
    description: 'delete a course',
  })
  async deleteCourse(
    @Body() body: DeleteCourseDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const course = await this.studentService.deleteCourse(body, id);
    return course;
  }
}
