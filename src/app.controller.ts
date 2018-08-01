import { Get, Post, Controller, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/tasks')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    findAllTasks(): Promise<any> {
        return this.appService.findAll();
    }

    @Post()
    createTask(@Body() request): object {
        return this.appService.create(request);
    }
}
