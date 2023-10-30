import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerenbangetComponent } from './kerenbanget.component';

describe('KerenbangetComponent', () => {
  let component: KerenbangetComponent;
  let fixture: ComponentFixture<KerenbangetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KerenbangetComponent]
    });
    fixture = TestBed.createComponent(KerenbangetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
