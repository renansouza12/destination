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
   trigger("premier",[
    transition(":enter",[
      
    ])
   ])
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
