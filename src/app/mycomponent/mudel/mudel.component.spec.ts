import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudelComponent } from './mudel.component';

describe('MudelComponent', () => {
  let component: MudelComponent;
  let fixture: ComponentFixture<MudelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
