import { ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeComponent } from './recipe.component';

describe('recipeComponent', () => {
  let component: recipeComponent;
  let fixture: ComponentFixture<recipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ recipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(recipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
