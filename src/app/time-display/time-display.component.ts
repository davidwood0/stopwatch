import { Component, Input, OnInit } from '@angular/core';
import { AddTimeService } from '../add-time.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  constructor(private addtimeService: AddTimeService) {}

  ngOnInit(): void {
    this.addtimeService.selectedTime$.subscribe((value) => {
      this.updateTime(value);
    });
  }

  private _secs = 0;
  private _hours = 0;
  private _mins = 0;
  private _totalSecs = 0;

  set secs(value: number) {
    this._secs = value;
  }

  get secs(): number {
    return this._secs;
  }

  get hours(): number {
    return this._hours;
  }

  set hours(value: number) {
    this._hours = value;
  }

  get mins(): number {
    return this._mins;
  }

  set mins(value: number) {
    this._mins = value;
  }

  updateTime(value: number): void {
    this._totalSecs += value;
    console.log('ts: ' + this._totalSecs);

    this.mins = Math.floor(this._totalSecs / 60);
    this.hours = Math.floor(this.mins / 60);
    this.secs = this._totalSecs % 60;
  }
}
