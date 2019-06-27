import { Component } from '@angular/core';
import { ClicksService } from './services/clicks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputInit: number;
  inputMin: number;
  inputMax: number;
  inputStep: number;
  title = 'counter';
  constructor(private cs: ClicksService) {}

  counters = [
    {
      num: 10,
      max: 100,
      min: 0,
      step: 10
    },
    {
      num: 20,
      max: 150,
      min: 0,
      step: 5
    },
    {
      num: 30,
      max: 200,
      min: -50,
      step: 20
    }
  ];
  addCounter() {
    this.cs.addClick()
    this.counters.push({
      num: this.inputInit,
      min: this.inputMin,
      max: this.inputMax,
      step: this.inputStep,
    });
    this.inputInit = null;
    this.inputMin = null;
    this.inputMax = null;
    this.inputStep = null;
  }
}
