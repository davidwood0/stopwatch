import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddTimeService } from '../add-time.service';

@Component({
  selector: 'app-add-time-button',
  templateUrl: './add-time-button.component.html',
  styleUrls: ['./add-time-button.component.scss'],
})
export class AddTimeButtonComponent implements OnInit {
  constructor(private addTimeService: AddTimeService) {}

  @Input() time: number = 0;
  @Input() unit: 's' | 'm' = 's';
  @Output() onTimeAdded = new EventEmitter<number>();

  ngOnInit(): void {}

  onClick(): void {
    const secs = this.convertTime();
    this.addTimeService.setTime(secs);
  }

  private convertTime(): number {
    let result = 0;

    if (this.unit === 's') {
      return this.time;
    } else if (this.unit === 'm') {
      return this.time * 60;
    }

    return result;
  }
}
