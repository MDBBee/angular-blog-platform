import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTopicsComponent } from './h-topics.component';

describe('HTopicsComponent', () => {
  let component: HTopicsComponent;
  let fixture: ComponentFixture<HTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
