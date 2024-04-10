import { Routes } from '@angular/router';

/* Components */
import { ListRenderComponent } from './components/list-render/list-render.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { PipesComponent } from './components/pipes/pipes.component';

export const routes: Routes = [
    {path:'',component:FirstComponentComponent},
    {path:'list',component:ListRenderComponent},
    {path:'if',component:IfRenderComponent},
    {path:'pipe',component:PipesComponent}
];

