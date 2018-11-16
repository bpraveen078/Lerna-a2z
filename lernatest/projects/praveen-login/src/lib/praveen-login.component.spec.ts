import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraveenLoginComponent } from './praveen-login.component';

describe('PraveenLoginComponent', () => {
  let component: PraveenLoginComponent;
  let fixture: ComponentFixture<PraveenLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraveenLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraveenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
