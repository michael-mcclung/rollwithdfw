import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiReviewStripComponent } from './sushi-review-strip.component';

describe('SushiReviewStripComponent', () => {
  let component: SushiReviewStripComponent;
  let fixture: ComponentFixture<SushiReviewStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SushiReviewStripComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SushiReviewStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
