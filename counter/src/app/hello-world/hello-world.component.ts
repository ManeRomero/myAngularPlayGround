import { Component, Input, OnInit } from '@angular/core';
import {ClicksService} from '../services/clicks.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {
  title: string;
  value: number;
  @Input() num: number;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  name: string;

  constructor(private clickService: ClicksService) {
      this.title = 'Esta app es counter!';
      this.name = '';
  }

  plusNum(value) {
    this.clickService.addClick()
    if (this.num + value >= this.min && this.num + value <= this.max){
      this.num += value;
    } else {
      this.num = this.min;
    }
  }

  multiNum() {
    this.clickService.addClick()
    this.num *= this.num + 1;
  }

  printName(e) {
    console.log(e.value, 'C L G E');
    this.name += e;
  }

  ngOnInit() {
    this.value = this.num;
  }
}