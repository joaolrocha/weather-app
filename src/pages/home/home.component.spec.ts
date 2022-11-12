import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentPage } from './home.component.page';

describe('HomeComponentPage', () => {
  let component: HomeComponentPage;
  let fixture: ComponentFixture<HomeComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponentPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
