import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';
import { Config } from '../../models/config';
import * as Color from '../utils/Colors';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  addDays,
  format
} from 'date-fns';


@Injectable()
export class OfficeService{

	private _url = Config.backendIp +":"+ Config.port;

	constructor(
	 public _http: HttpClient
	) {
		console.log("Office Service Cargado");
	}

	login(loginData:any):boolean{
		if(loginData.user =="admin" && loginData.pass == "1234"){
			return true;
		}
		return false;
	}

	getCalendarEvents(year,month): Observable<any>{
		let headers = new HttpHeaders()
			.set('Content-Type','application/json');
		return this._http.get(this._url+'/getEventsByYearMonth/'+year+'/'+month,{headers: headers});		
	}
}
