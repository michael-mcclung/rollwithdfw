import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollWithDfwHeroComponent } from './rollwithdfw-hero.component';

describe('RollwithdfwHero', () => {
  let component: RollWithDfwHeroComponent;
  let fixture: ComponentFixture<RollWithDfwHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollWithDfwHeroComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RollWithDfwHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
