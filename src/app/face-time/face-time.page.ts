import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-time',
  templateUrl: './face-time.page.html',
  styleUrls: ['./face-time.page.scss'],
})
export class FaceTimePage implements OnInit {
  imgUrl: string;
  imgsSrc: string[] = [
    'stock-1.jpg',
    'stock-2.jpg',
    'stock-3.jpg',
    'stock-4.jpg',
    'stock-5.jpg',
    'stock-6.jpg',
    'stock-7.jpg',
    'stock-8.jpg',
    'stock-9.jpg',
    'stock-10.jpg',
    'stock-11.jpg',
    'stock-12.jpg',
    'stock-13.jpg',
    'stock-14.jpg',
    'stock-15.jpg',
    'stock-16.jpg',
    'stock-17.jpg',
    'stock-18.jpg',
    'stock-19.jpg',
    'stock-20.jpg',
    'stock-21.jpg',
    'stock-22.jpg',
    'stock-23.jpg',
    'stock-24.jpg',
    'stock-25.jpg',
    'stock-26.jpg',
  ];
  currentImg: string;
  imgsRandom: string[];

  constructor() {
    this.imgsRandom = [];
    this.currentImg = '';
    this.onTap();
  }

  ngOnInit() {
  }

  onTap() {
    if (this.imgsRandom.length <= 0) {
      this.imgsRandom = this.getRandomImgOrder();
    }

    this.currentImg = this.imgsRandom.pop();

    this.imgUrl = `./assets/imgs/face-time/${this.currentImg}`;
  }

  getRandomImgOrder(): string[] {
    const randImgs: string[] = [];
    const imgMap: Map<string, string> = new Map();

    this.imgsSrc.forEach((v) => {
      if (v !== this.currentImg) {
        imgMap.set(v, v);
      }
    });

    while (imgMap.size > 0) {
      const imgIndex = Math.floor(Math.random() * imgMap.size);
      const keys = [...imgMap.keys()];

      randImgs.push(keys[imgIndex]);
      imgMap.delete(keys[imgIndex]);
    }

    return randImgs;
  }
}
