

# Destination

This is a test project created to practice some Angular animations. The repository is designed for learning purposes and serves as a sandbox to explore and implement various animation techniques using Angular.

## What are Angular Animations?

Angular animations are a powerful feature of Angular that enables developers to create dynamic, visually appealing user interfaces. With Angular animations, you can define transitions, effects, and keyframe-based animations for elements in your application.

Angular animations are built on top of the Web Animations API and offer a declarative approach to animating components and elements using Angular's built-in libraries.

### Common Use Cases for Angular Animations
- Page transitions
- Expanding or collapsing elements
- Hover effects
- Loading spinners or progress indicators
- Fading elements in and out
- Sliding or moving elements across the screen

## How to Use Angular Animations

### Step 1: Import the Animations 
To use Angular animations in your project, you need to import the `provideAnimations` from `@angular/platform-browser/animations` in your `app.config.ts`.

```typescript
// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),provideAnimations()]
};

```

### Step 2: Define Animations
Define your animations using Angular's animation library in your component. Angular provides a set of functions to define animations, such as `trigger`, `state`, `style`, `transition`, `animate`, and `keyframes`.

Here's an example of a simple fade-in and fade-out animation:

```typescript
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <div [@fadeInOut]="'in'" class="animated-box">
      Welcome to Angular Animations!
    </div>
  `,
  styles: [`
    .animated-box {
      width: 200px;
      height: 100px;
      background-color: lightblue;
      text-align: center;
      line-height: 100px;
      margin: 20px auto;
    }
  `],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent { }
```

### Step 3: Apply Animations
Bind the defined animations to your elements using Angular's animation triggers. In the example above, the `fadeInOut` trigger is applied to the `div` element.


## Learn More
To learn more about Angular animations, check out the official documentation:

[Angular Animations Guide](https://angular.dev/api/animations/animation)

