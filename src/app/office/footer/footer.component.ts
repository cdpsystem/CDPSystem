import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'off-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('250ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('250ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class OffFooterComponent implements OnInit,OnChanges {
	public hora = "01/01/1970";
	public _error = "";
	public _visible:boolean;

	@Input() 
	set error(error:string){
		this._error = error;
	}

	get visible(): boolean {
    // transform value for display
    	return this._visible;
	}

	@Input()
	set visible(visible: boolean) {
	    this._visible = visible;
	}

	ngOnChanges(){

	}

	constructor() { }

	ngOnInit() {
		
	}

}
