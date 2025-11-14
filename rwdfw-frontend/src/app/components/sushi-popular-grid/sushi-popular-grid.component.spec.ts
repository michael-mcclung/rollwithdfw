import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiPopularGridComponent } from './sushi-popular-grid.component';

describe('SushiPopularGridComponent', () => {
  let component: SushiPopularGridComponent;
  let fixture: ComponentFixture<SushiPopularGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SushiPopularGridComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SushiPopularGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
