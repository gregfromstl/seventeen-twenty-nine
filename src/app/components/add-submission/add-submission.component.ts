import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-submission',
  templateUrl: './add-submission.component.html',
  styleUrls: ['./add-submission.component.css'],
})
export class AddSubmissionComponent implements OnInit {
  @Input() submissionFormOpen = false;
  plusIcon = faPlus;
  cancelIcon = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
