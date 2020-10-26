import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLibraryComponent } from './delete-library.component';

describe('DeleteLibraryComponent', () => {
  let component: DeleteLibraryComponent;
  let fixture: ComponentFixture<DeleteLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
