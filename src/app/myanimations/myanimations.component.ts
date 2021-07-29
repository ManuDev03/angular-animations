import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations'

@Component({
  selector: 'app-myanimations',
  templateUrl: './myanimations.component.html',
  styleUrls: ['./myanimations.component.css'],
  animations:[trigger("openClose",[state("open",style({
    height:'200px',
    opacity:1,
    backgroundColor:'yellow'
  })),
  state("closed",style({
    height:'500px',
    opacity:0.5,
    backgroundColor:'orange'
  })),transition("open=>closed",[animate('1s')]),
  transition("closed=>open",[animate('.5s')])
  
])]
})
export class MyanimationsComponent implements OnInit {
  isOpen=true

  constructor() { }
toggle(){
  this.isOpen=this.isOpen==true?false:true
}
  ngOnInit(): void {
  }

}
