import { Component ,EventEmitter,Input,OnInit} from '@angular/core';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { Pet } from '../../../interfaces/Pet';

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css'
})

export class PetFormComponent implements OnInit {

 @Output() onSubmit:EventEmitter<Pet> = new EventEmitter()
 @Input() btnText!:String 
 @Input() formDetail:string = ''
 
 message!:string 
 petForm!:FormGroup

 ngOnInit(): void {
  this.petForm = new FormGroup({
    name: new FormControl('',[Validators.required]),  
    type: new FormControl('',[Validators.required]),
    race: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required])
   })
 }

 get name(){
  return this.petForm.get('name')!
 }

 get type(){
  return this.petForm.get('type')!
 }

 get race(){
  return this.petForm.get('race')!
 }

 get age(){
  return this.petForm.get('age')!
 }

 submit(){
  if (this.petForm.invalid) {
    return
  }
  this.onSubmit.emit(this.petForm.value)
  console.log('Pet cadastrado com sucesso!')
  this.message = 'Pet cadastrado com sucesso!'
 }
}
