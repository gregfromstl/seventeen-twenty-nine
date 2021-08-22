import { Component, Input, OnInit } from '@angular/core';
import { Submission } from 'src/app/models/submission';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
})
export class SubmissionComponent implements OnInit {
  @Input() submission: Submission;

  constructor() {}

  ngOnInit(): void {}
}
