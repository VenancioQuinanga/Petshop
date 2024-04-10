import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  name:String = "Matheus"
  car = {
    name: 'Mercendes xy',
    price:20000,
    brand:'Mercedes'
  }

  constructor(){}
  ngOnInit(): void {
    
  }
}
