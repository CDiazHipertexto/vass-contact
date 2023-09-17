import { Component } from '@angular/core';

import { ICarouselItem } from './carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from './data/constants/carousel.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vass-contact';
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
}
