import { Component } from '@angular/core';

/* Components */
import { PetFormComponent } from '../../../form/pet-form/pet-form.component';

/* Interfaces */
import { Pet } from '../../../../interfaces/Pet';

/* Services */
import { PetServiceService } from '../../../../services/pet/pet-service.service';

@Component({
  selector: 'app-new-pet',
  standalone: true,
  imports: [PetFormComponent],
  templateUrl: './new-pet.component.html',
  styleUrl: './new-pet.component.css'
})
export class NewPetComponent {
 btnTextValue:string = 'Cadastrar'
 formDetailValue:string = 'Cadastre seu pet aqui'

 constructor(private petServiceService:PetServiceService){}
 createPet(pet:Pet){

  console.log('Enviou!',pet.age)
 }
}
