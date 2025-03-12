import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { IntroComponent } from '../../sections/intro/intro.component';
import { FranceComponent } from '../../sections/france/france.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,IntroComponent,FranceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
