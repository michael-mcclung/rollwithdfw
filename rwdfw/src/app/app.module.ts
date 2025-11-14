import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


// adjust paths to match the sidebar in your screenshot
import { HomePageComponent } from '../components/home-page/home-page.component';
import { RollWithDfwHeroComponent } from '../components/rollwithdfw-hero/rollwithdfw-hero.component';
import { SushiContactUsComponent } from '../components/sushi-contact-us/sushi-contact-us.component';
import { SushiPopularGridComponent } from '../components/sushi-popular-grid/sushi-popular-grid.component';
import { SushiReviewStripComponent } from '../components/sushi-review-strip/sushi-review-strip.component';

@NgModule({
    declarations: [
        HomePageComponent,
        RollWithDfwHeroComponent,
        SushiContactUsComponent,
        SushiPopularGridComponent,
        SushiReviewStripComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: []
})
export class AppModule { }
