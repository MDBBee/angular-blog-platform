import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPostComponent } from './h-post.component';

describe('HPostComponent', () => {
  let component: HPostComponent;
  let fixture: ComponentFixture<HPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
