import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiContactUsComponent } from './sushi-contact-us.component';

describe('SushiContactUs', () => {
  let component: SushiContactUsComponent;
  let fixture: ComponentFixture<SushiContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SushiContactUsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SushiContactUsComponent);
    component = fixture.componentInstance; SushiContactUsComponent
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
