import { Component } from '@angular/core';
import { Task_ } from 'src/app/models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
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
