import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExpComponent } from './pipes-exp.component';

describe('PipesExpComponent', () => {
  let component: PipesExpComponent;
  let fixture: ComponentFixture<PipesExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
