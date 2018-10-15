import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
// https://stackblitz.com/edit/ngx-swiper-wrapper-demo?file=app%2Fapp.component.html
// https://www.npmjs.com/package/ngx-page-scroll


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public show: boolean = true;
  public visible = false;
  

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: true
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  constructor() {}

  ngOnInit(){}

  public onIndexChange(index: number) {
    if(index == 1) this.visible=true;
    console.log('Swiper index: ', index);
  }
}
