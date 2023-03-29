import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  hours = 0;
  mins = 0;
  secs = 0;

  constructor() {}

  ngOnInit(): void {}
}
