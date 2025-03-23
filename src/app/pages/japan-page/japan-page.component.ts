import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-japan-page',
  imports: [NgOptimizedImage],
  templateUrl: './japan-page.component.html',
  styleUrls:[ './japan-page.component.scss','./japan-page.responsive.component.scss']
})
export class JapanPageComponent {
  protected japanVideo:string = "videos/japan-video.mp4"; 
  protected japanFirstImage:string = "images/japan-images/japan1.jpeg";
  protected japanSecondImage:string = "images/japan-images/japan2.jpeg";
}
