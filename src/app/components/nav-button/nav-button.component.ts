import { Component, Input, OnInit } from '@angular/core';
import {
  faPenSquare,
  faLaptop,
  faMicroscope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
})
export class NavButtonComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;
  writingIcon = faPenSquare;
  laptopIcon = faLaptop;
  researchIcon = faMicroscope;

  constructor() {}

  ngOnInit(): void {}
}
