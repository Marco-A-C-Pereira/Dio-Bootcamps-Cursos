import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaItemComponent } from './camisa-item.component';

describe('CamisaItemComponent', () => {
  let component: CamisaItemComponent;
  let fixture: ComponentFixture<CamisaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
