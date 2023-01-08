import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmatTreeComponent } from './nmat-tree.component';

describe('NmatTreeComponent', () => {
  let component: NmatTreeComponent;
  let fixture: ComponentFixture<NmatTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmatTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmatTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
