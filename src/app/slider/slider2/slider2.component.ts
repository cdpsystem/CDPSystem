import { Component, Input,Output,EventEmitter,OnChanges,SimpleChanges,SimpleChange, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, sequence, stagger, query } from "@angular/animations";
@Component({
  selector: 'cdp-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css'],
  animations: [
    trigger('popOverState', [
      transition('hide => show', [ 
        query('div',style({ opacity: 0 })),
        query('div', 
          stagger('600ms', [
            animate('900ms', style({ opacity: 1 }))
          ])
          
        )
      ]),

      transition('show => hide', [ 
        query('div',style({ opacity: 0 })),
      ])

    ])



  ]
})
export class Slider2Component implements OnInit, OnChanges {
	show:any = false;
  private _estado = false;
	private _visible = false;

  public cardArray = [
    {src : "assets/images/brand/html5.png",title: "HTML 5"},
    {src : "assets/images/brand/css3.png",title: "CSS 3"},
    {src : "assets/images/brand/js.png",title: "JavaScript"},
    {src : "assets/images/brand/jquery.png",title: "JQuery"},
    {src : "assets/images/brand/php.png",title: "PHP"},
    {src : "assets/images/brand/mysql.png",title: "MySQL"},
    {src : "assets/images/brand/angular.png",title: "Angular"},
    {src : "assets/images/brand/node.png",title: "Node"},
    {src : "assets/images/brand/mongodb.png",title: "MongoDB"}
   ]

	@Input()
     set visible(visible:boolean){
       	console.log(this._visible)
       	this._visible = visible;
     }

  	constructor() { }

  	ngOnInit() {console.log(this.cardArray)}

  	ngOnChanges(changes: SimpleChanges) {
	    const visible: SimpleChange = changes.visible;
	    console.log('prev value: ', visible.previousValue);
	    console.log('got name: ', visible.currentValue);
	    if(visible.currentValue)this.toggle();
	  }

  	get stateName(){
  		return this.show ? 'show' : 'hide';
  	}

  	toggle(){
      this.show = !this.show;
  	}


}
