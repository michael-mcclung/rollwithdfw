import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiPopularGrid } from './sushi-popular-grid';

describe('SushiPopularGrid', () => {
  let component: SushiPopularGrid;
  let fixture: ComponentFixture<SushiPopularGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SushiPopularGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiPopularGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
