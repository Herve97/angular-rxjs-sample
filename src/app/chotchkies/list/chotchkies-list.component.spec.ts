import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChotchkiesListComponent } from './chotchkies-list.component';

describe('ChotchkiesListComponent', () => {
  let component: ChotchkiesListComponent;
  let fixture: ComponentFixture<ChotchkiesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChotchkiesListComponent]
    });
    fixture = TestBed.createComponent(ChotchkiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
