import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedLibComponent } from './my-shared-lib.component';

describe('MySharedLibComponent', () => {
  let component: MySharedLibComponent;
  let fixture: ComponentFixture<MySharedLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySharedLibComponent]
    });
    fixture = TestBed.createComponent(MySharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
