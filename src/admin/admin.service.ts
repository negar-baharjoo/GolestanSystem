import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { CreateStudentDto } from './dtos/create-student.dto';

@Injectable()
export class AdminService {
  constructor(public prisma: PrismaService) {}

  async getAdminName() {
    const adminName = await this.prisma.admin.findMany({
      select: {
        name: true,
      },
    });
    return adminName;
  }

  async createCourse(data: CreateCourseDto) {
    try {
      const newCourse = await this.prisma.course.create({
        data: {
          name: data.name,
          unit: data.unit,
          professorId: data.professorId,
          capacity: data.capacity,
          preCourses: {
            create: data.preCourses,
          },
        },
      });
      return newCourse;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async createProfessor(data: CreateProfessorDto) {
    try {
      const newProfessor = await this.prisma.professor.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
      return newProfessor;
    } catch (error) {
      console.error('Error creating professor:', error);
    }
  }

  async createStudent(data: CreateStudentDto) {
    try {
      const newStudent = await this.prisma.student.create({
        data: {
          name: data.name,
          email: data.email,
          capacity: data.capacity,
          password: data.password,
        },
      });
      return newStudent;
    } catch (error) {
      console.error('Error creating student:', error);
    }
  }
}
