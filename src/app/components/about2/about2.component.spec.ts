import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent2 } from './about2.component';

describe('AboutComponent', () => {
  let component: AboutComponent2;
  let fixture: ComponentFixture<AboutComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
