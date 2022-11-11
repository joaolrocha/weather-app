import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoratiesComponentPage } from './favoraties.component.page';

describe('FavoratiesComponentPage', () => {
  let component: FavoratiesComponentPage;
  let fixture: ComponentFixture<FavoratiesComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoratiesComponentPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoratiesComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
