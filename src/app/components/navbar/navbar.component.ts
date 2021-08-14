import { Component, OnInit } from '@angular/core';
import {
  faPenSquare,
  faLaptop,
  faMicroscope,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  writingIcon = faPenSquare;
  programmingIcon = faLaptop;
  researchIcon = faMicroscope;
  allIcon = faChartPie;

  selected: string;

  constructor() {}

  ngOnInit(): void {
    this.selected = 'all';
  }

  onSelect(selected: string): void {
    this.selected = selected;
  }
}
