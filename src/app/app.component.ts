import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

/*Components*/
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DerectivesComponent } from './components/derectives/derectives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DerectivesComponent,
    IfRenderComponent,
    EmitterComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_angular';
  userName:string = 'João Mendonça'

  handleClick():void{
    console.log('evento funcionando!')
    this.userName = 'Victor Mendes'
  }
}
