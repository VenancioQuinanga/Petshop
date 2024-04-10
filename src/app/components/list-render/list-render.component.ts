import { Component } from '@angular/core';

/* Interfaces */
import { Animal } from '../../interfaces/Animal';
import { User } from '../../interfaces/User';

/* Services */
import { ListServiceService } from '../../services/list-service.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals:Animal[] = [
    {name:"Turca",type:"Dog",age:4},
    {name:"Frida",type:"Dog",age:10},
    {name:"Tom",type:"Cat",age:5},
    {name:"Bob",type:"Horse",age:1},
    {name:"Kayon",type:"Lion",age:7},
    {name:"Frost",type:"Bird",age:6}
  ]

  animalDetails:string = 'Detatlhes dos pets'

  users:User[] = []

  constructor(private listService:ListServiceService){ }

  showAge(animal:Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal:Animal){
    this.animals = this.listService.remove(this.animals, animal)
    this.animalDetails = `O pet ${animal.name} foi removido com sucesso!`
  }

  getUsers(){
    //this.listService.getAll().subscribe((users)=>(this.users = users))
    console.log('usuários:',this.users)
  }
}
