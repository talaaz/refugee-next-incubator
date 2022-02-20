import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent2 } from './team2.component';

describe('TeamComponent2', () => {
  let component: TeamComponent2;
  let fixture: ComponentFixture<TeamComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
