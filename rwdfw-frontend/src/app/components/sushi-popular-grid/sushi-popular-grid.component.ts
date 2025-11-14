import { Component, OnInit } from '@angular/core';
import { SushiSpotsService, SushiSpot } from '../../services/sushi-spots.service';
import { CommonModule } from '@angular/common';

interface Spot {
  name: string;
  area: string;
  highlight: string;
  tags: string[];
  rating: number;
  price: string;
}

@Component({
  selector: 'app-sushi-popular-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sushi-popular-grid.component.html',
  styleUrls: ['./sushi-popular-grid.component.css']
})

export class SushiPopularGridComponent {
  spots: Spot[] = [];
  filteredSpots: Spot[] = [];

  isLoading = true;
  hasError = false;

  tags: string[] = [];
  activeTag: string | null = null;

  constructor(private spotsService: SushiSpotsService) { }

  ngOnInit() {
    this.loadSpots();
  }

  loadSpots() {
    this.isLoading = true;
    this.hasError = false;

    // Fake data for now — replace with your JSON/http
    this.spots = [
      {
        name: 'Sushi Sake DFW',
        area: 'Uptown Dallas',
        highlight: 'Best spicy tuna rolls for late nights.',
        tags: ['#DateNightDFW', '#LateNightDFW'],
        rating: 4.7,
        price: '$$'
      }
    ];

    this.tags = ['#DateNightDFW', '#CheapEats', '#LateNightDFW'];
    this.filteredSpots = this.spots;
    this.isLoading = false;
  }

  filterByTag(tag: string) {
    this.activeTag = tag;
    this.filteredSpots =
      tag === 'ALL' || !tag
        ? this.spots
        : this.spots.filter(s => s.tags.includes(tag));
  }
}
