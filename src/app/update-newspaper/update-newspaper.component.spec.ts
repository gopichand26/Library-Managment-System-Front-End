import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewspaperComponent } from './update-newspaper.component';

describe('UpdateNewspaperComponent', () => {
  let component: UpdateNewspaperComponent;
  let fixture: ComponentFixture<UpdateNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
