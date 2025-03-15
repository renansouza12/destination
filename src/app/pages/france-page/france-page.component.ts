import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-france-page',
  imports: [NgOptimizedImage],
  templateUrl: './france-page.component.html',
  styleUrls:[ './france-page.component.scss','./france-page.responsive.component.scss']
})
export class FrancePageComponent {

}
