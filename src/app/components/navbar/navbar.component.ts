import { Component, OnInit } from '@angular/core';
import {
  faPenSquare,
  faLaptop,
  faMicroscope,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { Filter } from 'src/app/types/filter';

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
  filterType = Filter;

  selected: Filter;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.select(Filter.All);
  }

  select(selected: Filter): void {
    this.selected = selected;
    this.taskService.setFilters([selected]);
  }
}
