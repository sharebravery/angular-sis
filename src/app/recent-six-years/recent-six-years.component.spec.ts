import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSixYearsComponent } from './recent-six-years.component';

describe('RecentSixYearsComponent', () => {
  let component: RecentSixYearsComponent;
  let fixture: ComponentFixture<RecentSixYearsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentSixYearsComponent]
    });
    fixture = TestBed.createComponent(RecentSixYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
