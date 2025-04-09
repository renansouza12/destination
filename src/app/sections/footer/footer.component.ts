import { Component } from '@angular/core';
import { SlideComponent } from '../../components/slide/slide.component';

@Component({
  selector: 'app-footer',
  imports: [SlideComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','./footer.responsive.component.scss']
})
export class FooterComponent {

}
