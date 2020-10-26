import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNewspaperComponent } from './search-newspaper.component';

describe('SearchNewspaperComponent', () => {
  let component: SearchNewspaperComponent;
  let fixture: ComponentFixture<SearchNewspaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNewspaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
