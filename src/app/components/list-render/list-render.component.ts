import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [];

  constructor(private listService: ListService) { 
    this.getAnimals();
  }

  animalDetails = '';

  showAge(animal: Animal){
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos de idade`;
  }

  removeAnimal(animal: Animal){
    console.log('removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(){
    this.listService.getAll().subscribe((animals)=>(this.animals = animals));
  }
}
