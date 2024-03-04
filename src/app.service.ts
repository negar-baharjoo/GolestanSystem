import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Dear professors and Students, Welcome to Golestans Comprehensive System!';
  }
}
