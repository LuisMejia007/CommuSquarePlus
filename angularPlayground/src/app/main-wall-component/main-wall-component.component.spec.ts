import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWallComponentComponent } from './main-wall-component.component';

describe('MainWallComponentComponent', () => {
  let component: MainWallComponentComponent;
  let fixture: ComponentFixture<MainWallComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWallComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
