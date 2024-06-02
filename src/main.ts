/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AuthModule } from '@auth0/auth0-angular';
import {provideAuth0} from '@auth0/auth0-angular';




bootstrapApplication(AppComponent, appConfig
    
  )
  .catch((err) => console.error(err));
