import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-time',
  templateUrl: './face-time.page.html',
  styleUrls: ['./face-time.page.scss'],
})
export class FaceTimePage implements OnInit {
  imgUrl: string;
  imgsSrc: string[] = [
    'PXL_20211115_021241762~2.png',
    'PXL_20210903_203352704_2.jpg',
    'PXL_20211106_012300792.png',
    'sdfghsdfh.png',
    'untitled-4.png',
    'PXL_20210914_171707847.jpg',
    'PXL_20210929_210025560.png',
    'PXL_20210816_001101757.jpg',
    'PXL_20220131_022450844.png',
    '20131107_194221.jpg',
    'hailey-9mo-52.png',
    'PXL_20210705_224256611.jpg',
    'PXL_20210815_235439281.PORTRAIT.jpg',
    'PXL_20220215_193649852.png',
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

    this.imgUrl = `./assets/imgs/${this.currentImg}`;
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
