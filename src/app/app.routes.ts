import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrancePageComponent } from './pages/france-page/france-page.component';
import { JapanPageComponent } from './pages/japan-page/japan-page.component';
import { BrasilPageComponent } from './pages/brasil-page/brasil-page.component';
import { ChinaPageComponent } from './pages/china-page/china-page.component';

export const routes: Routes = [
    {   
        path:"",
        component:HomeComponent
    },
    {
        path:"france",
        component:FrancePageComponent
    },
    {
        path:"japan",
        component:JapanPageComponent
    },
    {
        path:"brasil",
        component:BrasilPageComponent
    },
    {
        path:"china",
        component:ChinaPageComponent
    }
];
