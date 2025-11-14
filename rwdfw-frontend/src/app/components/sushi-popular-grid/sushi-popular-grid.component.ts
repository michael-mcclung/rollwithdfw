import { Component, OnInit } from '@angular/core';
import { SushiSpotsService, SushiSpot } from '../../services/sushi-spots.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
  imports: [CommonModule, HttpClientModule],
  templateUrl: './sushi-popular-grid.component.html',
  styleUrls: ['./sushi-popular-grid.component.css']
})

export class SushiPopularGridComponent implements OnInit {
  spots: Spot[] = [];
  filteredSpots: Spot[] = [];
  tags: string[] = [];
  activeTag: string | null = null;
  isLoading = true;
  hasError = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Spot[]>('assets/data/rollwithdfw-spots.json').subscribe({
      next: (data) => {
        console.log('Sushi spots data loaded:', data);
        this.spots = data;
        this.tags = this.extractTags(data);
        this.filteredSpots = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading sushi spots:', error);
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  extractTags(spots: Spot[]) {
    const all = spots.flatMap(s => s.tags);
    return Array.from(new Set(all));
  }

  filterByTag(tag: string) {
    this.activeTag = tag;
    this.filteredSpots =
      tag === 'ALL' || !tag
        ? this.spots
        : this.spots.filter(s => s.tags.includes(tag));
  }
}
