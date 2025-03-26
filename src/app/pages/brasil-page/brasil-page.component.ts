import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-brasil-page',
  imports: [NgOptimizedImage,BackButtonComponent],
  templateUrl: './brasil-page.component.html',
  styleUrls: ['./brasil-page.component.scss','./brasil-page.responsive.component.scss']
})
export class BrasilPageComponent {

      protected brasilVideo:string = "videos/brasil-video.mp4";
      protected brasilImage1:string = "images/brasil-images/brasil1.jpeg";
      protected brasilImage2:string = "images/brasil-images/brasil2.jpeg";

}
