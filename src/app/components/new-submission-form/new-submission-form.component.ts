import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Submission } from 'src/app/models/submission';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-submission-form',
  templateUrl: './new-submission-form.component.html',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'translateX(0%)',
          display: 'block',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(150%)',
          display: 'none',
        })
      ),
      transition('open => closed', [
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'translateX(0%)', display: 'block' }),
            style({ transform: 'translateX(150%)', display: 'block' }),
          ])
        ),
      ]),
      transition('closed => open', [
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'translateX(150%)', display: 'block' }),
            style({ transform: 'translateX(0%)', display: 'block' }),
          ])
        ),
      ]),
    ]),
  ],
  styleUrls: ['./new-submission-form.component.css'],
})
export class NewSubmissionFormComponent {
  @Input() isOpen = false;
  @Output() submissionEvent = new EventEmitter<Submission>();
  checkIcon = faCheck;

  title: string;
  description: string;
  url: string;

  constructor() {}

  updateTitle(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.title = target?.value;
  }

  updateDescription(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.description = target?.value;
  }

  updateUrl(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.url = target?.value;
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.url = '';
  }

  async submitForm() {
    const submission: Submission = {
      title: this.title,
      description: this.description,
      url: this.url,
      comments: [],
      user: '',
      votes: 0,
    };
    this.submissionEvent.emit(submission);
    this.resetForm();
  }
}
