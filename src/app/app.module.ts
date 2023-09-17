import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    CarouselComponent,
    HomeBannerComponent,
    IconMenuComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgbModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
