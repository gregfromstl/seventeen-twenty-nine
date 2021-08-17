import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Task_ } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task_;
  @Output() goBackEvent: EventEmitter<null> = new EventEmitter();
  backIcon = faChevronLeft;

  constructor() {}

  ngOnInit(): void {}

  goBack(): void {
    this.goBackEvent.emit();
  }
}
