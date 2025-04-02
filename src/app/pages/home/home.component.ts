import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { IntroComponent } from '../../sections/intro/intro.component';
import { FranceComponent } from '../../sections/france/france.component';
import { JapanComponent } from '../../sections/japan/japan.component';
import { BrasilComponent } from '../../sections/brasil/brasil.component';
import { ChinaComponent } from '../../sections/china/china.component';
import { FooterComponent } from '../../sections/footer/footer.component';

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-home',
  imports: [HeroComponent,
            IntroComponent,
            FranceComponent,
            JapanComponent,
            BrasilComponent,
            ChinaComponent,
            FooterComponent
    
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  ngOnInit() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    this.initAnimations();
  }

  initAnimations() {
    // Your animations will go here

    gsap.from(".france_image",{
      scrollTrigger:{
        trigger: ".france_text",
        start: "-20% center",
        end: "top bottom",
        scrub: 1,
      },
      y: 60,
    })

    gsap.from(".france_text",{
      scrollTrigger:{
        trigger: ".france_text",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
      y: -60
    })

    gsap.to("#japan_title",{
      scrollTrigger:{
        trigger:".japan_image",
        start: "top center",
        end: "bottom bottom",
        scrub: 1, 
        // markers:true
      },
      y:70
    })

    gsap.from(".japan_image",{
      scrollTrigger:{
        trigger: ".japan_image",
        start: "top center",
        end: "top center",
        scrub: 1,
        // markers:true
      },
      y: 20
    })

    gsap.from(".brasil_image",{
      scrollTrigger:{
        trigger: ".brasil_text",
        start: "top center",
        end: "top center",
        scrub: 1,
        // markers:true
      },
      y: 40
    })



    gsap.from(".china_image",{
      scrollTrigger:{
        trigger: ".china_text",
        start: "top center",
        end: "top center",
        scrub: 1,
        // markers:true
      },
      y: -40
    })

    gsap.to("#china_title",{
      scrollTrigger:{
        trigger:".china_image",
        start: "top center",
        end: "bottom bottom",
        scrub: 1, 
        // markers:true
      },
      y:70
    })

  }

  ngOnDestroy() {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
