import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task_ } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { Filter } from 'src/app/types/filter';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  tasks: Task_[] = [];
  @Output() selectTask: EventEmitter<Task_> = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks.subscribe((tasks) => this.tasks = tasks);
    this.taskService.refreshTasks(); // force refresh tasks
  }

  clickCard(task: Task_): void {
    this.selectTask.emit(task);
  }
}
