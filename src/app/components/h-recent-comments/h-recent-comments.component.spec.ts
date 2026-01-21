import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRecentCommentsComponent } from './h-recent-comments.component';

describe('HRecentCommentsComponent', () => {
  let component: HRecentCommentsComponent;
  let fixture: ComponentFixture<HRecentCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HRecentCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRecentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
