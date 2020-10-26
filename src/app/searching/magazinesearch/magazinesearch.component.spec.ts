import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinesearchComponent } from './magazinesearch.component';

describe('MagazinesearchComponent', () => {
  let component: MagazinesearchComponent;
  let fixture: ComponentFixture<MagazinesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
