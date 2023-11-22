import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import {
  iPokemonResponse,
  iSpeciesResponse,
} from 'src/app/model/pokemon.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent implements OnInit {
  pokemon: string;
  PokeInf$: Observable<iPokemonResponse>;
  PokeSpecies$: Observable<iSpeciesResponse>;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.GetPokemonInfo(String(param.get('pokemonId')));
    });
  }

  GetPokemonInfo = (PokeNum: number | string): void => {
    this.PokeInf$ = this.api.GetPokemon(PokeNum);
    this.PokeSpecies$ = this.api.GetPokemonUtilities(
      `https://pokeapi.co/api/v2/pokemon-species/${PokeNum}/`
    );
  };
}
