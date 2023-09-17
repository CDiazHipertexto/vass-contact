import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, {Autoplay, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination, Navigation]);
// install Swiper modules
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
