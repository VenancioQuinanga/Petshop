import { Component,Input,Output,EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
 @Input() id!:number
 @Input() name:string = ''
 @Input() type:string = ''
 @Input() image:string = ''

 @Output() showPetDetails:EventEmitter<string> = new EventEmitter()
 @Output() removePet:EventEmitter<string> = new EventEmitter()

 handleDetails(){
  //this.showPetDetails.emit()
 }

 handleRemove(){
  this.removePet.emit()
 }

}
