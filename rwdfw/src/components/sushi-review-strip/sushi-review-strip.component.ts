import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sushi-review-strip',
  templateUrl: './sushi-review-strip.component.html',
  styleUrls: ['./sushi-review-strip.component.css']
})
export class SushiReviewStripComponent {
  reviews = [
    {
      name: 'Alex M.',
      quote: 'RollWithDFW helped me find my new go-to sushi bar in under 5 minutes.',
      label: '#DFWLocal'
    },
    {
      name: 'Jasmine R.',
      quote: 'Finally, honest reviews that talk about rice and not just “it was good lol.”',
      label: '#RiceSnob'
    },
    {
      name: 'Kevin T.',
      quote: 'Found a hidden omakase spot I never would’ve noticed on my own.',
      label: '#WeekendFoodie'
    }
  ];
}
