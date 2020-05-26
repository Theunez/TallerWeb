import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanoSearchComponent } from './villano-search.component';

describe('VillanoSearchComponent', () => {
  let component: VillanoSearchComponent;
  let fixture: ComponentFixture<VillanoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
