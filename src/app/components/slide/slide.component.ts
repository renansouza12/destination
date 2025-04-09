import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

const timing = '500ms ease-in-out';

@Component({
  selector: 'app-slide',
  imports: [NgOptimizedImage],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
  animations:[
    trigger('slideAnimation', [
      transition(':increment', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)', position: 'absolute', width: '100%' }),
            animate(timing, style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ position: 'absolute', width: '100%' }),
            animate(timing, style({ transform: 'translateX(-100%)' }))
          ], { optional: true })
        ])
      ]),
      transition(':decrement', [
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)', position: 'absolute', width: '100%' }),
            animate(timing, style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ position: 'absolute', width: '100%' }),
            animate(timing, style({ transform: 'translateX(100%)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class SlideComponent {
  protected slide = signal(1);
  protected animationParams = signal({
    value: 0, // Unique value for each animation
    params: {
      leaveEnd: '100%',
      enterStart: '-100%'
    }
  });
  private totalSlides = 6;

  nextSlide() {
    const nextSlide = this.slide.update(value => (value < this.totalSlides ? value + 1 : 1));
    this.animationParams.update(params => ({
      value: params.value + 1, // Increment the unique value
      params: {
        leaveEnd: '-100%',
        enterStart: '100%'
      }
    }));
  }

  previousSlide() {
    const prevSlide = this.slide.update(value => (value > 1 ? value - 1 : this.totalSlides));
    this.animationParams.update(params => ({
      value: params.value + 1, // Increment the unique value
      params: {
        leaveEnd: '100%',
        enterStart: '-100%'
      }
    }));
  }
}
