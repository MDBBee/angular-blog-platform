import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPostsComponent } from './create-new-posts.component';

describe('CreateNewPostsComponent', () => {
  let component: CreateNewPostsComponent;
  let fixture: ComponentFixture<CreateNewPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
