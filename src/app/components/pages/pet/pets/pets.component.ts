import { Component } from '@angular/core';

/* Components */
import { PetCardComponent } from '../../../layout/pet-card/pet-card.component';

/* Interfaces */
import { Pet } from '../../../../interfaces/Pet';
import { User } from '../../../../interfaces/User';

/* Services */
import { PetServiceService } from '../../../../services/pet/pet-service.service';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetCardComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  pets:Pet[] = [
    {id:1,name:"Turca",type:"Cachorro",race:"Lavrador",image:"labra1.jpg",age:1},
    {id:2,name:"Frida",type:"Cachorro",race:"Lavrador",image:"labra2.jpg",age:2},
    {id:3,name:"Tom",type:"Cachorro",race:"Lavrador",image:"labra3.jpg",age:2},
    {id:4,name:"Bob",type:"Cachorro",race:"Canichi",image:"pet1.jpg",age:1},
    {id:5,name:"Frost",type:"Cachorro",race:"Lavrador",image:"pet2.jpg",age:6},
    {id:6,name:"Sacha",type:"Cachorro",race:"Canichi",image:"pet3.jpg",age:2},
    {id:7,name:"Vin",type:"Cachorro",race:"Canichi",image:"pet4.jpg",age:5},
    {id:8,name:"Kayon",type:"Cachorro",race:"Canichi",image:"pet5.jpg",age:4},
    {id:9,name:"Sandra",type:"Cachorro",race:"Canichi",image:"pet6.jpg",age:3},
    {id:10,name:"Kate",type:"Cachorro",race:"Canichi",image:"pet7.jpg",age:3},
    {id:11,name:"Simba",type:"Cachorro",race:"Bubu",image:"pet8.jpg",age:6},
    {id:12,name:"Xuxu",type:"Cachorro",race:"Canichi",image:"pet9.jpg",age:4},
    {id:13,name:"Layca",type:"Cachorro",race:"Negra",image:"pet10.jpg",age:6},
  ]

  petDetails:string = ''

  users:User[] = []

  constructor(private petServiceService:PetServiceService){ }

  onShowPetDetails(pet:Pet){
    this.petDetails = `O pet ${pet.name} é de raça ${pet.race}, é um ${pet.type} e tem ${pet.age} ano(s)`
  }

  onRemovePet(pet:Pet){
    this.pets = this.petServiceService.remove(this.pets, pet)
    this.petDetails = `O pet ${pet.name} foi removido com sucesso!`
  }

  getUsers(){
    //this.petServiceService.getAll().subscribe((users)=>(this.users = users))
    console.log('usuários:',this.users)
  }
}
