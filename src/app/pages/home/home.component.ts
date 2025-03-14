import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { IntroComponent } from '../../sections/intro/intro.component';
import { FranceComponent } from '../../sections/france/france.component';
import { JapanComponent } from '../../sections/japan/japan.component';
import { BrasilComponent } from '../../sections/brasil/brasil.component';
import { ChinaComponent } from '../../sections/china/china.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,
            IntroComponent,
            FranceComponent,
            JapanComponent,
            BrasilComponent,
            ChinaComponent,
            FooterComponent
    
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
