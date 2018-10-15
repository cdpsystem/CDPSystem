import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import ScrollTo from 'jquery-animate-scroll';
import AnimatedScroll from 'js-animate-scroll';
@Component({
  selector: 'cdp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	private _lastScrollPos:number;

	constructor() {
		//Conf inicial para el scroll del header
		this._lastScrollPos = 0;
	}

	ngOnInit() {

		//Control del scroll
		$(document).scroll(()=>{
			this.scrollDown($("html,body"));
		})

  	}

  	scrollDown(element){
  		if(element.scrollTop() >= 0 && element.scrollTop() < window.innerHeight){
  			if(this._lastScrollPos < element.scrollTop()){

  				var options = {
				    duration: 100,
				    easing: '',
				    padding: 0,
				    align: 'top',
				    onFinish: function () {}
				};
				new AnimatedScroll('#header-menu', options);
  			}
  			this._lastScrollPos = element.scrollTop();
  		}
  		
  	}



}
