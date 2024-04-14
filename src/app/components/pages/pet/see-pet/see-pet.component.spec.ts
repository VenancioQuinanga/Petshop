import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePetComponent } from './see-pet.component';

describe('SeePetComponent', () => {
  let component: SeePetComponent;
  let fixture: ComponentFixture<SeePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeePetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
