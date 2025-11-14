import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiContactUs } from './sushi-contact-us';

describe('SushiContactUs', () => {
  let component: SushiContactUs;
  let fixture: ComponentFixture<SushiContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SushiContactUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SushiContactUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
