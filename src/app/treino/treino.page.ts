import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {

  constructor() { }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  ngOnInit() {
  }

}
