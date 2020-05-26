import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanoCardComponent } from './villano-card.component';

describe('VillanoCardComponent', () => {
  let component: VillanoCardComponent;
  let fixture: ComponentFixture<VillanoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
