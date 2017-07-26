import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput> 
      <button (mouseover)="onClick($event, myInput.value) "> Click me</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(event,value){
    console.log(event);
    console.log(value);
  }

}
