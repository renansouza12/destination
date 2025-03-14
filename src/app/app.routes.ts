import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FranceComponent } from './sections/france/france.component';
import { FrancePageComponent } from './pages/france-page/france-page.component';

export const routes: Routes = [
    {   
        path:"",
        component:HomeComponent
    },
    {
        path:"france",
        component:FrancePageComponent
    }
];
