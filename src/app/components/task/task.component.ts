import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  task: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.task = params['task']));
  }

  ngOnInit(): void {}
}
