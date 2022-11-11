import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from 'src/components/card/card.component';
import { CardListFavoratiesComponent } from 'src/components/cardListFavoraties/card-list-favoraties.component';
import { CardMusicComponent } from 'src/components/cardMusic/card-music.component';
import { CardWeatherComponent } from 'src/components/cardWeather/card-weather.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HttpService } from 'src/utils/http.service';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardMusicComponent,
    CardListFavoratiesComponent,
    CardWeatherComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    CardMusicComponent,
    CardListFavoratiesComponent,
    CardWeatherComponent
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
