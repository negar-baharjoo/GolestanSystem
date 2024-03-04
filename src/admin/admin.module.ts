import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { prismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [AdminService, PrismaService],
  controllers: [AdminController],
  imports: [prismaModule],
})
export class AdminModule {}
