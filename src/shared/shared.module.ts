import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from 'src/components/card/card.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HttpService } from 'src/utils/http.service';
import { CardMusicComponent } from 'src/components/cardMusic/card-music.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardMusicComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    CardMusicComponent
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
