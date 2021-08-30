import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Submission } from 'src/app/models/submission';
import { Task_ } from 'src/app/models/task';
import { AuthService } from 'src/app/services/auth.service';
import { SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task_;
  @Output() goBackEvent: EventEmitter<null> = new EventEmitter();
  addingSubmission = false;
  backIcon = faChevronLeft;

  constructor(
    private submissionService: SubmissionService,
    private authService: AuthService
  ) {}

  goBack(): void {
    this.goBackEvent.emit();
  }

  async addSubmission(submission: Submission): Promise<void> {
    this.submissionService
      .addSubmission(submission, this.task.submissions ?? [], this.task.id)
      .then((result) => {
        this.task.submissions = [submission, ...(this.task.submissions ?? [])];
        this.addingSubmission = false;
      });
  }

  toggleNewSubmissionForm(): void {
    this.addingSubmission = !this.addingSubmission;
  }
}
