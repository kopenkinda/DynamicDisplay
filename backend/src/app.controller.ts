import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

const RESPONSE_PLANNING = {
  description: 'planning ecran',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'planningResponse',
        properties: {
        },
      },
    },
  },
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
