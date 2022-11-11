import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListFavoratiesComponent } from './card-list-favoraties.component';


describe('CardListFavoratiesComponent', () => {
  let component: CardListFavoratiesComponent;
  let fixture: ComponentFixture<CardListFavoratiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListFavoratiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListFavoratiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
