import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmatTreeNodeComponent } from './nmat-tree-node.component';

describe('NmatTreeNodeComponent', () => {
  let component: NmatTreeNodeComponent;
  let fixture: ComponentFixture<NmatTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmatTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmatTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
