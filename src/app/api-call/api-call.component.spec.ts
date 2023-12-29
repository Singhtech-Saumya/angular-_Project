import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCAllComponent } from './api-call.component';

describe('ApiCAllComponent', () => {
  let component: ApiCAllComponent;
  let fixture: ComponentFixture<ApiCAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCAllComponent]
    });
    fixture = TestBed.createComponent(ApiCAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
