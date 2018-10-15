import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OfficeService } from '../offservices/office.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'off-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [OfficeService]
})
export class LoginComponent implements OnInit {
	//Objeto para el ngModel
	private _login = {user : "",pass:""}

	//Control si esta logueado
	private _logged:boolean = false;

	//Comunica al office si esta logueado o no
	@Output() logged = new EventEmitter();

	constructor(
		private _ckService: CookieService,
		private _officeService: OfficeService
		) { }

	ngOnInit() {
		var loginInfo;
		if(loginInfo = this._ckService.get('userdata')){
			this._login = JSON.parse(loginInfo);
			this.login();
		}

	}


	login(){
		
		this._logged = this._officeService.login(this._login)
		if(this._logged){
			this._ckService.set('userdata',JSON.stringify(this._login));
			console.log(this._logged)
			this.logged.emit(this._logged);
		}

	}


}
