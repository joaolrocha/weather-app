import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-card-music',
  templateUrl: './card-music.component.html',
  styleUrls: ['./card-music.component.scss']
})
export class CardMusicComponent implements OnInit {

  @Input() artists: any;
  @Input() tracks: any;

  constructor() { }

  ngOnInit(): void {
  }

}
