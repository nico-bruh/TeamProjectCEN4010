import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorLinkComponent } from './author-link.component';

describe('AuthorLinkComponent', () => {
  let component: AuthorLinkComponent;
  let fixture: ComponentFixture<AuthorLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
