import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BackButtonComponent } from '../../components/back-button/back-button.component';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-brasil-page',
  imports: [NgOptimizedImage, BackButtonComponent],
  templateUrl: './brasil-page.component.html',
  styleUrls: ['./brasil-page.component.scss', './brasil-page.responsive.component.scss'],
  animations: [
    trigger('imageAnim', [
      transition(':enter', [
        animate(
          '1s ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY({{y}})', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ], { params: { y: '50px' } }),
    ]),

    trigger('videoAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }), 
        animate(
          '500ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0px)' }) 
        ),
      ]),
    ]),
  ]
})
export class BrasilPageComponent implements AfterViewInit {


  protected brasilVideoSrc: string = "videos/brasil-video.mp4";
  protected brasilImage1: string = "images/brasil-images/brasil1.jpeg";
  protected brasilImage2: string = "images/brasil-images/brasil2.jpeg";

  @ViewChild("brasilVideo") brasilVideo!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit(): void {
    if (this.brasilVideo) {
      this.brasilVideo.nativeElement.muted = true;
    }
  }
}
