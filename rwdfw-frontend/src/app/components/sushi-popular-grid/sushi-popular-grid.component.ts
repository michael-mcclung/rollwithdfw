import { Component, OnInit } from '@angular/core';
import { SushiSpotsService, SushiSpot } from '../../services/sushi-spots.service';

@Component({
  selector: 'app-sushi-popular-grid',
  templateUrl: './sushi-popular-grid.component.html',
  styleUrls: ['./sushi-popular-grid.component.css']
})
export class SushiPopularGridComponent implements OnInit {
  spots: SushiSpot[] = [];
  filteredSpots: SushiSpot[] = [];
  tags: string[] = [];
  activeTag: string = 'All';

  isLoading = true;
  hasError = false;

  constructor(private spotsService: SushiSpotsService) { }

  ngOnInit(): void {
    this.spotsService.getSpots().subscribe({
      next: (spots) => {
        this.spots = spots;
        this.filteredSpots = spots;
        this.tags = this.buildTagList(spots);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.hasError = true;
      }
    });
  }

  buildTagList(spots: SushiSpot[]): string[] {
    const set = new Set<string>();
    spots.forEach(spot => {
      spot.tags.forEach(tag => set.add(tag));
    });
    return ['All', ...Array.from(set)];
  }

  filterByTag(tag: string): void {
    this.activeTag = tag;
    if (tag === 'All') {
      this.filteredSpots = this.spots;
    } else {
      this.filteredSpots = this.spots.filter(spot => spot.tags.includes(tag));
    }
  }
}
