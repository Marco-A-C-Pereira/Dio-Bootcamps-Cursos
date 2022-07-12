import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisasAppComponent } from './camisas-app.component';

describe('CamisasAppComponent', () => {
  let component: CamisasAppComponent;
  let fixture: ComponentFixture<CamisasAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisasAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisasAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
