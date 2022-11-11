import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from 'src/components/card/card.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HttpService } from 'src/utils/http.service';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    HeaderComponent,
    CardComponent,
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
