import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iApi, iPokemonResponse } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = environment.api;
  constructor(private httpClient: HttpClient) {}

  ListPokemons() {
    return this.httpClient.get<iApi>(`${this.url}?limit=150`);
  }

  GetPokemon(pokeName: string | number) {
    return this.httpClient.get<iPokemonResponse>(`${this.url}/${pokeName}`);
  }
}
