import { Component, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent  {



  onChangeNumber(){
    console.log('FOIIII');
  }

}
