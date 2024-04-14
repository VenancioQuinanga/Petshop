import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* Components */
import { PetCardComponent } from '../../../layout/pet-card/pet-card.component';

/* Interfaces */
import { Pet } from '../../../../interfaces/Pet';

/* Services*/
import { PetServiceService } from '../../../../services/pet/pet-service.service';

@Component({
  selector: 'app-see-pet',
  standalone: true,
  imports: [PetCardComponent],
  templateUrl: './see-pet.component.html',
  styleUrl: './see-pet.component.css'
})
export class SeePetComponent {
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

  petFounded:boolean = false

  constructor(private petServiceService:PetServiceService,private route:ActivatedRoute){ }

  petId:number = Number(this.route.snapshot.paramMap.get('id'))
  p:any = this.petServiceService.find(this.pets,this.petId)
  pet:Pet = this.p

}

