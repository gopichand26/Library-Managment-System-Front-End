import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewspaperComponent } from './add-newspaper.component';

describe('AddNewspaperComponent', () => {
  let component: AddNewspaperComponent;
  let fixture: ComponentFixture<AddNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
