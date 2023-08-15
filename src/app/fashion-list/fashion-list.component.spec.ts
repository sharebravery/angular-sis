import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionListComponent } from './fashion-list.component';

describe('FashionListComponent', () => {
  let component: FashionListComponent;
  let fixture: ComponentFixture<FashionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionListComponent]
    });
    fixture = TestBed.createComponent(FashionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
