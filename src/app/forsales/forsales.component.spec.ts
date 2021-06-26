import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsalesComponent } from './forsales.component';

describe('ForsalesComponent', () => {
  let component: ForsalesComponent;
  let fixture: ComponentFixture<ForsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
