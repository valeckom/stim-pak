import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tappy',
  templateUrl: './tappy.page.html',
  styleUrls: ['./tappy.page.scss'],
})
export class TappyPage implements OnInit {
  backgroundColor;
  colors = [
    '#FF6565',
    '#FFB265',
    '#FFFF65',
    '#65FF65',
    '#65FFB2',
    '#65FFFF',
    '#65B2FF',
    '#6565FF',
    '#B265FF',
    '#FF65FF',
    '#FF65B2',
  ];
  colorI = 0;

  constructor() {
    this.backgroundColor = this.colors[this.colorI];
  }

  ngOnInit() {
  }

  onTap() {
    this.colorI++;

    if (this.colorI >= this.colors.length) {
      this.colorI = 0;
    }

    this.backgroundColor = this.colors[this.colorI];
  }
}
