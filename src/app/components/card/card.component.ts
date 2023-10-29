import { Component, Input, OnInit } from '@angular/core';
import {
  iPokemonResponse,
  iTypeColor,
} from 'src/app/model/pokemon.model';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  private typeColor: iTypeColor[] = [
    { type: 'normal', color: '#A8A77A' },
    { type: 'fire', color: '#EE8130' },
    { type: 'water', color: '#6390F0' },
    { type: 'electric', color: '#F7D02C' },
    { type: 'grass', color: '#7AC74C' },
    { type: 'ice', color: '#74b9ff' },
    { type: 'fighting', color: '#C22E28' },
    { type: 'poison', color: '#A33EA1' },
    { type: 'ground', color: '#E2BF65' },
    { type: 'flying', color: '#A98FF3' },
    { type: 'psychic', color: '#F95587' },
    { type: 'bug', color: '#A6B91A' },
    { type: 'rock', color: '#B6A136' },
    { type: 'ghost', color: '#735797' },
    { type: 'dragon', color: '#6F35FC' },
    { type: 'dark', color: '#705746' },
    { type: 'steel', color: '#B7B7CE' },
    { type: 'fairy', color: '#D685AD' },
  ];

  @Input() pokeNum: number | string;

  PokeInf$: Observable<iPokemonResponse>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.GetPokemonInfo(this.pokeNum);
  }

  ReturnImagePokemon = (pokemonID: number): string => {
    return `background: url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png) no-repeat center;`;
  };

  addZero = (n: number, totalZeros: number) => {
    return `#${String(n).padStart(totalZeros, '0')}`;
  };

  ReturnBackgroundColor = (pokemonType: string): string => {
    const typeResult: iTypeColor = this.typeColor.reduce(
      (typeResult: iTypeColor, currentType: iTypeColor) => {
        currentType.type === pokemonType
          ? (typeResult = currentType)
          : typeResult;
        return typeResult;
      },
      { color: '', type: '' }
    );
    return `background: ${typeResult.color}`;
  };

  ReturnBackgroundCard = (pokemonType: string): string => {
    const typeResult: iTypeColor = this.typeColor.reduce(
      (typeResult: iTypeColor, currentType: iTypeColor) => {
        currentType.type === pokemonType
          ? (typeResult = currentType)
          : typeResult;
        return typeResult;
      },
      { color: '', type: '' }
    );

    return `background: radial-gradient(circle at 50% 0%, ${typeResult.color} 36%, #ffffff 36%);`;
  };

  GetPokemonInfo = (PokeNum: number | string): void => {
    this.PokeInf$ = this.api.GetPokemon(PokeNum);
  };
}
