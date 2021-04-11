import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBrowsingComponent } from './book-browsing.component';

describe('BookBrowsingComponent', () => {
  let component: BookBrowsingComponent;
  let fixture: ComponentFixture<BookBrowsingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBrowsingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
