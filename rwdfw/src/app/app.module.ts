import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './components/home-page/home-page.ts';
import { RollWithDfwHeroComponent } from './rollwithdfw-hero/rollwithdfw-hero.component.ts';
import { SushiHighlightGridComponent } from './sushi-highlight-grid/sushi-highlight-grid.component';
import { SushiReviewStripComponent } from './sushi-review-strip/sushi-review-strip.component';
import { SushiContactComponent } from './sushi-contact/sushi-contact.component';

@NgModule({
    declarations: [
        HomePageComponent,
        RollWithDfwHeroComponent,
        SushiHighlightGridComponent,
        SushiReviewStripComponent,
        SushiContactComponent
    ],
    imports: [›
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
})
export class AppModule { }
