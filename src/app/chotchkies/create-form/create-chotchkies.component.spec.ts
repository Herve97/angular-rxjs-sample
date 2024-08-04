import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChotchkiesComponent } from './create-chotchkies.component';

describe('CreateChotchkiesComponent', () => {
  let component: CreateChotchkiesComponent;
  let fixture: ComponentFixture<CreateChotchkiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChotchkiesComponent]
    });
    fixture = TestBed.createComponent(CreateChotchkiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
