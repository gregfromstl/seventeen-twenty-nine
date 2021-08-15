import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task_ | null;

  constructor() {}

  ngOnInit(): void {}
}
