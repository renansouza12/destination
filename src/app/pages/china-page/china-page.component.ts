import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { animate, query, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-china-page',
  imports: [NgOptimizedImage,BackButtonComponent],
  templateUrl: './china-page.component.html',
  styleUrls: ['./china-page.component.scss','./china-page.responsive.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => visible', [ 
        style({ opacity: 0 ,transform:"translate({{translateX}},{{translateY}})"}), 
        animate('{{timing}}ms ease-in', style({ opacity: 1,transform:"translate(0px, 0px)"}))
      ],{params:{ timing: 500, translateX: '0px', translateY: '0px' }})
    ])
  ]
})
export class ChinaPageComponent {
  protected firstImage: string = "images/china-images/china3.jpg";
  protected secondImage: string = "images/china-images/china2.avif";
  protected thirdImage: string = "images/china-images/china1.jpg";

}
