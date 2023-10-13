import { Component } from '@angular/core';
import { iPokemon } from 'src/app/model/pokemon.model';

@Component({
  selector: 'app-container-cards',
  templateUrl: './container-cards.component.html',
  styleUrls: ['./container-cards.component.css'],
})
export class ContainerCardsComponent {
  pokemons: iPokemon[];
  Pokenum: number[];

  constructor() {
    this.getPokemons();
  }

  getPokemons(qtdPokemons: number = 151): iPokemon[] {
    let ListPokemons: iPokemon[] = [];
    let ListPokenums: number[] = [];

    for (let i = 1; i < qtdPokemons + 1; i++) {
      ListPokenums.push(i);
      let pokemon: iPokemon = {
        num: i,
        hp: 0,
        name: '',
        attack: 0,
        defense: 0,
        speed: 0,
        types: [],
      };

      ListPokemons.push(pokemon);
    }
    this.Pokenum = ListPokenums;
    this.pokemons = ListPokemons;
    return ListPokemons;
  }
}
