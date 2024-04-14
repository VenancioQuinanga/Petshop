import { Injectable } from '@angular/core';
//import { HttpClient,HttpHeaders } from '@angular/common/http';

/* Interfaces*/
import { Pet } from '../../interfaces/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private ApiUrl:string = 'http://localhost:5000/users'

  constructor() { }

  find(pets:Pet[], id:number){
    let pet:any = false
    pets.forEach((p) => {
      if (p.id == id) {
        pet = p
      }
    });    
    return pet
  }

  remove(pets:Pet[], pet:Pet){
    return pets.filter((p)=>pet.name !== p.name)
  }
  
  /*
  getAll():Observable<User[]>{
    console.log('obtendo usuarios')
    return this.http.get<User[]>(this.ApiUrl)
    
  }
  */
}
