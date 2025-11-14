import { Component } from '@angular/core';

interface SushiSpot {
  name: string;
  area: string;
  rating: number;
  tag: string;
  price: string;
  highlight: string;
}

@Component({
  selector: 'app-sushi-highlight-grid',
  standalone: true,
  imports: [],
  templateUrl: './sushi-popular-grid.component.html',
  styleUrls: ['./sushi-popular-grid.component.css']
})
export class SushiPopularGridComponent {
  spots: SushiSpot[] = [
    {
      name: 'Tokyo Drift Sushi',
      area: 'Deep Ellum, Dallas',
      rating: 4.8,
      tag: '#RollWithDFW • #BestOverall',
      price: '$$',
      highlight: 'Creative rolls, ultra-fresh fish, and a chill late-night vibe.'
    },
    {
      name: 'Umi on the Lake',
      area: 'Lakefront, Fort Worth',
      rating: 4.7,
      tag: '#DateNightDFW',
      price: '$$$',
      highlight: 'Omakase-style chef’s menu with perfect sunset views.'
    },
    {
      name: 'Roll On Texas Express',
      area: 'Plano',
      rating: 4.6,
      tag: '#CheapEats • Lunch',
      price: '$',
      highlight: 'Fast, affordable, and legit nigiri for your lunch break.'
    },
    {
      name: 'Sakura Street Bar',
      area: 'Uptown, Dallas',
      rating: 4.5,
      tag: '#LateNightDFW',
      price: '$$',
      highlight: 'Lofi beats, small plates, and sake flights to explore.'
    }
  ];
}
