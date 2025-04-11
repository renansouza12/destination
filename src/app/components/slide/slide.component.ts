import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

const timing = '1000ms ease-in-out';

@Component({
  selector: 'app-slide',
  imports: [NgOptimizedImage],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
  animations:[
    trigger('slideAnimation', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({ transform: 'translateY(-150%)', opacity: 0 }),
            animate(timing, style({ transform: 'translateY(0)', opacity: 1 }))
          ]),
          query(':leave', [
            style({ transform: 'translateY(0)', opacity: 1 }),
            animate(timing, style({ transform: 'translateY(150%)', opacity: 0 }))
          ])
        ])
      ])
    ])
  ]
})
export class SlideComponent {

  protected londonImage:string = "slide-images/lodon.avif";
  protected newYork:string = "slide-images/newyork.avif";
  protected bangkok:string = "slide-images/bangkok.avif";
  protected istanbul:string = "slide-images/istanbul.avif";
  protected amsterdam:string = "slide-images/amsterdam.avif";
  protected madrid:string = "slide-images/madrid.avif";

  protected slide = signal(1);
  protected totalSlides =6;
  protected direction = signal<'right' | 'left'>('right');
nextSlide() {
  if (this.slide() < this.totalSlides) { 
    this.direction.set("right");
    this.slide.set(this.slide() + 1);
  } else {
    this.direction.set("right");
    this.slide.set(1); 
  }
}

previousSlide() {
  if (this.slide() > 1) {
    this.direction.set("left");
    this.slide.set(this.slide() - 1);
  } else {
    this.direction.set("left");
    this.slide.set(this.totalSlides);
  }
}
}
