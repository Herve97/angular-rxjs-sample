import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChotchkiesContainerComponent } from './chotchkies-container.component';

describe('ChotchkiesContainerComponent', () => {
  let component: ChotchkiesContainerComponent;
  let fixture: ComponentFixture<ChotchkiesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChotchkiesContainerComponent]
    });
    fixture = TestBed.createComponent(ChotchkiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
