import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallCardComponentComponent } from './wall-card-component.component';

describe('WallCardComponentComponent', () => {
  let component: WallCardComponentComponent;
  let fixture: ComponentFixture<WallCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
