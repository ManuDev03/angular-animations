import { Component, OnInit } from '@angular/core';
import {trigger,state,transition,style,animate,animation} from '@angular/animations'
@Component({
  selector: 'app-imageanimations',
  templateUrl: './imageanimations.component.html',
  styleUrls: ['./imageanimations.component.css'],
  animations:[trigger("imageTransitions",[
    state("idle",style({transform:'rotate(0)'})),
    state("rotated",style({transform:'rotate(-180deg)'})),
    transition("idle=>rotated",animate('400ms ease-in')),
    transition("rotated=>idle",animate('400ms ease-out'))

  ])]
})
export class ImageanimationsComponent implements OnInit {
state =true
toggle(){
  this.state=this.state?false:true
}

  constructor() { }

  ngOnInit(): void {
  }

}
