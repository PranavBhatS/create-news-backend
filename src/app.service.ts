import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' well come to pranav"s ipl updates !';
  }
  getDirectory() {
    return __dirname
  }
}
