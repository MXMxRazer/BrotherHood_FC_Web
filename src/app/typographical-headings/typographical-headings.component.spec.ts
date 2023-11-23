import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographicalHeadingsComponent } from './typographical-headings.component';

describe('TypographicalHeadingsComponent', () => {
  let component: TypographicalHeadingsComponent;
  let fixture: ComponentFixture<TypographicalHeadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypographicalHeadingsComponent]
    });
    fixture = TestBed.createComponent(TypographicalHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
