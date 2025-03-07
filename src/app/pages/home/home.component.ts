import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
