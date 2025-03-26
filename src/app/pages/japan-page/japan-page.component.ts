import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from "../../components/back-button/back-button.component";

@Component({
  selector: 'app-japan-page',
  imports: [NgOptimizedImage, BackButtonComponent],
  templateUrl: './japan-page.component.html',
  styleUrls:[ './japan-page.component.scss','./japan-page.responsive.component.scss']
})
export class JapanPageComponent {
  protected japanVideo:string = "videos/japan-video.mp4"; 
  protected japanFirstImage:string = "images/japan-images/japan1.jpeg";
  protected japanSecondImage:string = "images/japan-images/japan2.jpeg";
}
