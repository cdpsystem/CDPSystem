import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'cdp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

	ngOnInit() {		
		$(document).scroll(()=>{
			if($(document).scrollTop() <= window.innerHeight){
				$("#header-menu").removeClass("header-menu-small")
			}else{
				$("#header-menu").addClass("header-menu-small")
			}
		})
	}

}
