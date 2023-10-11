import { Component } from '@angular/core';

@Component({
  selector: 'app-container-cards',
  templateUrl: './container-cards.component.html',
  styleUrls: ['./container-cards.component.css'],
})
export class ContainerCardsComponent {
  pokemons = [
    {
      num: 1,
      hp: 45,
      name: 'Bulbassaur',
      attack: 45,
      defense: 90,
      speed: 45,
      types: ['grass', 'poison'],
    },
    {
      num: 2,
      hp: 45,
      name: 'Ivyssaur',
      attack: 45,
      defense: 90,
      speed: 45,
      types: ['grass', 'poison'],
    },
    {
      num: 3,
      hp: 45,
      name: 'Venussaur',
      attack: 45,
      defense: 90,
      speed: 45,
      types: ['grass', 'poison'],
    },
    {
      num: 4,
      hp: 45,
      name: 'charmander',
      attack: 45,
      defense: 90,
      speed: 45,
      types: ['fire'],
    },
  ];
}
