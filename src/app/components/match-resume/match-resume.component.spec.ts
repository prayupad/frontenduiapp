import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchResumeComponent } from './match-resume.component';

describe('MatchResumeComponent', () => {
  let component: MatchResumeComponent;
  let fixture: ComponentFixture<MatchResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
