import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FirstComponentComponent } from './app/components/first-component/first-component.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
