import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanoDetailsComponent } from './villano-details.component';

describe('VillanoDetailsComponent', () => {
  let component: VillanoDetailsComponent;
  let fixture: ComponentFixture<VillanoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
