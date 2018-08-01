import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

enum Status {
    TODO = 1,
    IN_PROGRESS = 2,
    COMPLETED = 3,
};

@Injectable()
export class AppService {
    findAll(): Promise<Task[]> {
        return Task.find();
    }

    create(payload): Task {
        const task = new Task();

        task.name = payload.name;
        task.status = Status.TODO;
        task.metadata = JSON.stringify(payload.metadata);
        task.createdAt = new Date();

        return task.save();
    }
}
