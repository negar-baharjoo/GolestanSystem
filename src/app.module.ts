import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { prismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { ProfessorController } from './professor/professor.controller';
import { ProfessorService } from './professor/professor.service';
import { ProfessorModule } from './professor/professor.module';
import { StudentModule } from './student/student.module';
//import { ModuleService } from './module.service'; // Import ModuleService here

@Module({
  imports: [AdminModule, prismaModule, ProfessorModule, StudentModule],
  controllers: [AppController, AdminController, ProfessorController],
  providers: [AppService, AdminService, PrismaService, ProfessorService],
})
export class AppModule {}
