import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWallHeadingComponent } from './main-wall-heading.component';

describe('MainWallHeadingComponent', () => {
  let component: MainWallHeadingComponent;
  let fixture: ComponentFixture<MainWallHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWallHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWallHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
