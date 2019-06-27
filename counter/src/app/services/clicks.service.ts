import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClicksService {
  private totalClicks = 0;
  constructor() { }

  addClick(): void {
    this.totalClicks++;
  }

  getClicks(): number{
    return this.totalClicks;
  }
}