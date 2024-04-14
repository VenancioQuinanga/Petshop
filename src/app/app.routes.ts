import { Routes } from '@angular/router';

/* Components */
import { HomeComponent } from './components/pages/home/home.component';
import { NewPetComponent } from './components/pages/pet/new-pet/new-pet.component';
import { PetsComponent } from './components/pages/pet/pets/pets.component';
import { SeePetComponent } from './components/pages/pet/see-pet/see-pet.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'pets',component:PetsComponent},
    {path:'pets/:id',component:SeePetComponent},
    {path:'new-pet',component:NewPetComponent},
];

