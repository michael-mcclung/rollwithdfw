import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollwithdfwHero } from './rollwithdfw-hero';

describe('RollwithdfwHero', () => {
  let component: RollwithdfwHero;
  let fixture: ComponentFixture<RollwithdfwHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollwithdfwHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollwithdfwHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
