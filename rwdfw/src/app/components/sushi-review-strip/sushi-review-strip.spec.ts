import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiReviewStrip } from './sushi-review-strip';

describe('SushiReviewStrip', () => {
  let component: SushiReviewStrip;
  let fixture: ComponentFixture<SushiReviewStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SushiReviewStrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiReviewStrip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
