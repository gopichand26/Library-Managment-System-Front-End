import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspapersearchComponent } from './newspapersearch.component';

describe('NewspapersearchComponent', () => {
  let component: NewspapersearchComponent;
  let fixture: ComponentFixture<NewspapersearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspapersearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspapersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
