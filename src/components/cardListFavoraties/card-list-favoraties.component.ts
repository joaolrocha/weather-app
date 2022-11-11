import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'component-card-list-favoraties',
  templateUrl: './card-list-favoraties.component.html',
  styleUrls: ['./card-list-favoraties.component.scss']
})
export class CardListFavoratiesComponent implements OnInit {

  @Input() favoritesList: any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  public removeFavorites(list: any, id: number){
    list?.splice(id, 1);
    localStorage.removeItem('favorites');
    this.favoritesList = list;
    localStorage.setItem('favorites', JSON.stringify(this.favoritesList));
  }

  public viewFavorites(item: any) {
    localStorage.removeItem('itemFavorite');
    localStorage.setItem('itemFavorite', JSON.stringify(item));
    this.router.navigate(['/myfavorite']);
  }

}
