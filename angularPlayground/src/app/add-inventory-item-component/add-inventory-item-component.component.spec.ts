import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoryItemComponentComponent } from './add-inventory-item-component.component';

describe('AddInventoryItemComponentComponent', () => {
  let component: AddInventoryItemComponentComponent;
  let fixture: ComponentFixture<AddInventoryItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInventoryItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoryItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
