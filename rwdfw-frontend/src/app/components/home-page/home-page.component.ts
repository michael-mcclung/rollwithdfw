import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollWithDfwHeroComponent } from '../rollwithdfw-hero/rollwithdfw-hero.component';
import { SushiPopularGridComponent } from '../sushi-popular-grid/sushi-popular-grid.component';
import { SushiReviewStripComponent } from '../sushi-review-strip/sushi-review-strip.component';
import { SushiContactUsComponent } from '../sushi-contact-us/sushi-contact-us.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RollWithDfwHeroComponent,
    SushiPopularGridComponent,
    SushiReviewStripComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent { }
