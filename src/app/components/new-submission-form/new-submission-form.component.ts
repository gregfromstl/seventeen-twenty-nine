import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-submission-form',
  templateUrl: './new-submission-form.component.html',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(150%)',
        })
      ),
      transition('open => closed', [
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'translateX(0%)' }),
            style({ transform: 'translateX(100%)' }),
            style({ transform: 'translateX(100%)' }),
          ])
        ),
      ]),
      transition('closed => open', [
        animate(
          '0.2s',
          keyframes([
            style({ transform: 'translateX(100%)' }),
            style({ transform: 'translateX(100%)' }),
            style({ transform: 'translateX(0%)' }),
          ])
        ),
      ]),
    ]),
  ],
  styleUrls: ['./new-submission-form.component.css'],
})
export class NewSubmissionFormComponent implements OnInit {
  @Input() isOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
