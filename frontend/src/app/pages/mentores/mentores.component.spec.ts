import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoresComponent } from './mentores.component';

describe('MentoresComponent', () => {
  let component: MentoresComponent;
  let fixture: ComponentFixture<MentoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
