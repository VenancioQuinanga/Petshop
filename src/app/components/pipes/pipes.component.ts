import { UpperCasePipe,DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,DatePipe,UpperCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  dado = 'Ola pipe'
  date = new Date(1988,3,15)
  
}
