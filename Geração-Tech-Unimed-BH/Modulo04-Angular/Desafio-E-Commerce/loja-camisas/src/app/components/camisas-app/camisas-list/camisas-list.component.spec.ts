import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisasListComponent } from './camisas-list.component';

describe('CamisasListComponent', () => {
  let component: CamisasListComponent;
  let fixture: ComponentFixture<CamisasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
