import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Submission } from 'src/app/models/submission';
import { Task_ } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task_;
  @Output() goBackEvent: EventEmitter<null> = new EventEmitter();
  addingSubmission = false;
  backIcon = faChevronLeft;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  goBack(): void {
    this.goBackEvent.emit();
  }

  async addSubmission(submission: Submission): Promise<void> {
    const result = await this.taskService.addSubmission(
      submission,
      this.task.submissions ?? [],
      this.task.url.split('/').slice(-1)[0]
    );
    this.addingSubmission = false;
  }

  toggleNewSubmissionForm(): void {
    this.addingSubmission = !this.addingSubmission;
  }
}
