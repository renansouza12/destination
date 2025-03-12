import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { IntroComponent } from '../../sections/intro/intro.component';
import { FranceComponent } from '../../sections/france/france.component';
import { JapanComponent } from '../../sections/japan/japan.component';
import { BrasilComponent } from '../../sections/brasil/brasil.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,
            IntroComponent,
            FranceComponent,
            JapanComponent,
            BrasilComponent
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
