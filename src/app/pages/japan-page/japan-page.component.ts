import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BackButtonComponent } from "../../components/back-button/back-button.component";
import { animate, transition, trigger,style } from '@angular/animations';

@Component({
  selector: 'app-japan-page',
  imports: [NgOptimizedImage, BackButtonComponent],
  templateUrl: './japan-page.component.html',
  styleUrls:[ './japan-page.component.scss','./japan-page.responsive.component.scss'],
  animations:[
   trigger('slideIn',[
      transition(':enter', [
        style({ transform: 'translateX(-100%)' ,opacity:0}),
        animate('500ms {{delay}}ms ease-in', style({ transform: 'translateX(0)',opacity:1 }))
      ],{params:{delay:0}})
    ])
  ]
})
export class JapanPageComponent {
  protected japanVideo:string = "videos/japan-video.mp4"; 
  protected japanFirstImage:string = "images/japan-images/japan1.jpeg";
  protected japanSecondImage:string = "images/japan-images/japan2.jpeg";
}
