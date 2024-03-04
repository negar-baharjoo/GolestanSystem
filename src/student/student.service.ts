import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { GetCourseDto } from './dtos/get-course.dto';

@Injectable()
export class StudentService {
  constructor(public prisma: PrismaService) {}

  async getCourse(data: GetCourseDto, id: number) {
    try {
      const course = await this.prisma.course.findUnique({
        where: { id: data.id },
      });

      const student = await this.prisma.student.findUnique({
        where: { id: id },
      });

      if (!course) {
        throw new Error('Course not found');
      }

      // Check if there is available capacity
      if (course.capacity > 0 && student.capacity + course.unit < 20) {
        // Decrement the course capacity by 1
        await this.prisma.course.update({
          where: { id: data.id },
          data: { capacity: { decrement: 1 } },
        });

        await this.prisma.student.update({
          where: { id: id },
          data: { capacity: { increment: course.unit } },
        });

        const a = await this.prisma.studentsOnCourses.create({
          data: {
            courseId: data.id,
            studentId: id,
          },
        });

        return a;
      } else {
        /* If the error object that your code throws contains
        a statusCode and a message, Nest.js will return those
        values instead of the default response. */
        throw new BadRequestException('This action is LOCK!');
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async deleteCourse(data: GetCourseDto, id: number) {
    try {
      const course = await this.prisma.course.findUnique({
        where: { id: data.id },
      });

      if (!course) {
        throw new Error('Course not found');
      }

      await this.prisma.studentsOnCourses.delete({
        where: {
          courseId_studentId: {
            studentId: id,
            courseId: data.id,
          },
        },
      });

      await this.prisma.course.update({
        where: { id: data.id },
        data: { capacity: { increment: 1 } },
      });

      await this.prisma.student.update({
        where: { id: id },
        data: { capacity: { decrement: course.unit } },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async weeklySchedule(id: number) {
    try {
      const schedule = await this.prisma.student.findUnique({
        where: { id: id },
        select: { courses: true },
      });
      return schedule;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
