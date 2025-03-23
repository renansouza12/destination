import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-china-page',
  imports: [NgOptimizedImage],
  templateUrl: './china-page.component.html',
  styleUrls: ['./china-page.component.scss','./china-page.responsive.component.scss']
})
export class ChinaPageComponent {
  protected firstImage: string = "images/china-images/china3.jpg";
  protected secondImage: string = "images/china-images/china2.avif";
  protected thirdImage: string = "images/china-images/china1.jpg";

}
