import { Injectable } from '@angular/core';
//import { HttpClient,HttpHeaders } from '@angular/common/http';

/* Interfaces*/
import { Animal } from '../interfaces/Animal';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private ApiUrl:string = 'http://localhost:5000/users'

  constructor() { }

  remove(animals:Animal[], animal:Animal){
    return animals.filter((a)=>animal.name !== a.name)
  }
  
  /*
  getAll():Observable<User[]>{
    console.log('obtendo usuarios')
    return this.http.get<User[]>(this.ApiUrl)
    
  }
  */
}
