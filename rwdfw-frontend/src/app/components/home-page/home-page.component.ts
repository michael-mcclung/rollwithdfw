import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollWithDfwHeroComponent } from '../rollwithdfw-hero/rollwithdfw-hero.component';
import { SushiReviewStripComponent } from '../sushi-review-strip/sushi-review-strip.component';
import { SushiContactUsComponent } from '../sushi-contact-us/sushi-contact-us.component';
import { SushiPopularGridComponent } from "../sushi-popular-grid/sushi-popular-grid.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RollWithDfwHeroComponent,
    SushiReviewStripComponent,
    SushiContactUsComponent,
    SushiPopularGridComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent { }
