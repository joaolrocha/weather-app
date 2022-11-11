
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoraties',
  templateUrl: './favoraties.component.page.html',
  styleUrls: ['./favoraties.component.page.scss']
})

export class FavoratiesComponentPage implements OnInit {

  public artists: any;
  public tracks: any;
  public weather: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  public getFavorites() {
    const item: any = localStorage.getItem('itemFavorite');
    const favorite = JSON.parse(item) || undefined;

    if (!favorite && (favorite === null || favorite === undefined)) {
      this.router.navigate(['/home']);
    }

    this.artists = favorite?.artists;
    this.tracks = favorite?.tracks;
    this.weather = favorite?.weather;
  }

}
