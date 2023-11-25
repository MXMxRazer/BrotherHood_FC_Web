import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAchievementsComponent } from './sub-achievements.component';

describe('SubAchievementsComponent', () => {
  let component: SubAchievementsComponent;
  let fixture: ComponentFixture<SubAchievementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubAchievementsComponent]
    });
    fixture = TestBed.createComponent(SubAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
