import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component'; // ✅ Correct class name
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Optional, useful for unknown tags like router-outlet, etc.

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent], // ✅ Use declarations for components
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ Optional: prevent unknown element errors
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
