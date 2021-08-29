import { Component } from '@angular/core';
import { Task_ } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'seventeen-twenty-nine';
  task: Task_ | null;

  constructor() {}

  selectTask(task: Task_) {
    this.task = task;
  }

  resetTask() {
    this.task = null;
  }
}
