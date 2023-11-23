import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorBlogsComponent } from './minor-blogs.component';

describe('MinorBlogsComponent', () => {
  let component: MinorBlogsComponent;
  let fixture: ComponentFixture<MinorBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinorBlogsComponent]
    });
    fixture = TestBed.createComponent(MinorBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
