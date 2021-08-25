import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
export class NewSubmissionFormComponent implements OnInit {
  @Input() isOpen = false;
  checkIcon = faCheck;

  constructor() {}

  ngOnInit(): void {}
}
