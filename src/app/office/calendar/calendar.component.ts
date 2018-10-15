import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { OfficeService } from '../offservices/office.service';
import { CalendarEvent, CalendarMonthViewDay  } from 'angular-calendar';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, addDays,subMonths,addMonths, format } from 'date-fns';
import * as Color from '../utils/Colors';
@Component({
  selector: 'off-calendar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class OffCalendarComponent implements OnInit {
	public activeDayIsOpen: boolean = false;
	public events: CalendarEvent[] = [];
	public viewDate: Date
	public view:string = "month"
	constructor(
		private _offService: OfficeService
	){ 
		//Obtenemos los eventos de la base de datos
		this._offService.getCalendarEvents(2018,10).subscribe(
			response =>{
				if (response.eventsFound != 0){
					//Angular no comprueba que el array sea nuevo asique hay que pisarlo cada vez
					let subArray: CalendarEvent[]=[];
					let color;
					response.eventsFound.forEach((event,index)=>{

						let color = event.color.split(',');
						subArray.push({title: event.title,color: {primary: color[0],secondary: color[1]},start: new Date(event.startDate),end: new Date(event.endDate)});
					})
					this.events = subArray;
					console.log(this.events);
				}				
			},err=>{console.log(err);}

		);

	}

	ngOnInit() {
		this.viewDate = new Date(2018,9);
	}
	

	 

	mesSiguiente(){
		this.viewDate = addMonths(this.viewDate,1);
	}
	mesAnterior(){
		this.viewDate = subMonths(this.viewDate,1);
	}
	

	dayClicked({date,events}: {date: Date; events: Array<CalendarEvent>;}): void {
	    if (isSameMonth(date, this.viewDate)) {
	      if (
	        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
	        events.length === 0
	      ) {
	        this.activeDayIsOpen = false;
	      } else {
	        this.activeDayIsOpen = true;
	        this.viewDate = date;
	      }
	    }
  	}

  	eventClicked(event){
  		console.log(event);

  	}

	beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
	    /*body.forEach(day => {		       
	      if (day.date.getDate() % 2 === 1 && day.inMonth) {
	        day.cssClass = 'odd-cell';
	      }	      
	    });*/
	}

  

}
