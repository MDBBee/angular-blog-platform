import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHeroComponent } from './h-hero.component';

describe('HHeroComponent', () => {
  let component: HHeroComponent;
  let fixture: ComponentFixture<HHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
