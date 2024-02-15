import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendStoryListComponent } from './recommend-story-list.component';

describe('RecommendStoryListComponent', () => {
  let component: RecommendStoryListComponent;
  let fixture: ComponentFixture<RecommendStoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendStoryListComponent]
    });
    fixture = TestBed.createComponent(RecommendStoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
