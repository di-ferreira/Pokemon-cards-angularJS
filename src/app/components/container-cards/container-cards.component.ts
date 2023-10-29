import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-container-cards',
  templateUrl: './container-cards.component.html',
  styleUrls: ['./container-cards.component.css'],
})
export class ContainerCardsComponent implements OnInit {
  Pokenum: (number | string)[];

  constructor(public api: ApiService) {}
  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(qtdPokemons: string | number = 151) {
    this.api.UpdateListPokemons(qtdPokemons);
  }
}
