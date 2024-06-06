import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoffersComponent } from './productoffers.component';

describe('ProductoffersComponent', () => {
  let component: ProductoffersComponent;
  let fixture: ComponentFixture<ProductoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
