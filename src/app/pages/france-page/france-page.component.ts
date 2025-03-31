import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { animate, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-france-page',
  imports: [NgOptimizedImage,BackButtonComponent],
  templateUrl: './france-page.component.html',
  styleUrls:[ './france-page.component.scss','./france-page.responsive.component.scss'],
  animations:[
    trigger('appear',[
      transition('void => visible',[
        style({opacity:0}),
        animate("500ms ease-in",style({opacity:1}))
      ])
    ]) 
  ]
})
export class FrancePageComponent {
    protected franceVideo:string = "videos/france-video.mp4";
    protected franceImage:string = "images/france-images/castle.jpeg";
}
