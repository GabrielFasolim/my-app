import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent{
  name: string = 'Gabriel';
  age: number = 20;
  job: string = 'Developer';
  hobbie = ['bola','tenis'];

  constructor() { }

  ngOnInit(): void {}

  car ={
    name: 'Gol',
    color:'Black',
  }

}
