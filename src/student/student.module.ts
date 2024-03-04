import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { prismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [prismaModule],
  providers: [StudentService, PrismaService],
  controllers: [StudentController],
})
export class StudentModule {}
