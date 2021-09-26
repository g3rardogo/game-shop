import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mySwiper: Swiper;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Cuando se rendericen los componentes hijos
   * se inicializa la libreria
   */
}
