import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOutputComponent } from './list-output.component';

describe('ListOutputComponent', () => {
  let component: ListOutputComponent;
  let fixture: ComponentFixture<ListOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
