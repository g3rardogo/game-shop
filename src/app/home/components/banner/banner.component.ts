import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
