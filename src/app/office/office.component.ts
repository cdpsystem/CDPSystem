import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

	private _isLogged:boolean;

	//Footer Control
	private _error:string;
	public _visible:boolean=false;

	constructor(
		private _ckService: CookieService
	) { }

	ngOnInit() {
		this._isLogged = this._ckService.check('userdata');
		this._error = "Todo correcto";
			
		$( "html,body" ).on( "mousemove", function( event ) {

		});	
		
	}

	toggleVisible(event){
		if(event.clientY >= window.innerHeight - 56 && !this._visible){
			this._visible = true;
		}else if (event.clientY < window.innerHeight- 56 && this._visible){
			this._visible = false;
		}
		//this._visible = !this._visible;
	}

	setLoginStatus(logStatus){
		this._isLogged = logStatus;
	}

}
