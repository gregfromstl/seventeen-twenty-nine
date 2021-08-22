import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-submission',
  templateUrl: './add-submission.component.html',
  styleUrls: ['./add-submission.component.css'],
})
export class AddSubmissionComponent implements OnInit {
  plusIcon = faPlus;

  constructor() {}

  ngOnInit(): void {}
}
