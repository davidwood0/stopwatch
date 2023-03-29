import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddTimeService {
  private time$ = new BehaviorSubject<number>(0);
  selectedTime$ = this.time$.asObservable();
  constructor() {}

  setTime(secs: number) {
    this.time$.next(secs);
  }
}
