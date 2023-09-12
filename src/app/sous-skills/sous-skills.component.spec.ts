import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousSkillsComponent } from './sous-skills.component';

describe('SousSkillsComponent', () => {
  let component: SousSkillsComponent;
  let fixture: ComponentFixture<SousSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
