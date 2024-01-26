import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    showProfileodal$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor() {}

    setProfileModal(value: boolean) {
      this.showProfileodal$.next(value);
  }
}
