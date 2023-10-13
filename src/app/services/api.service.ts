import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iApi, iPokemonResponse } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = environment.api;
  private PokeList = signal<(number | string)[]>([]);
  constructor(private httpClient: HttpClient) {}

  ListPokemons() {
    return this.httpClient.get<iApi>(`${this.url}?limit=150`);
  }

  GetPokemon(pokeName: string | number) {
    return this.httpClient.get<iPokemonResponse>(`${this.url}/${pokeName}`);
  }

  public UpdateListPokemons(List: string | number = 151) {
    let ListPokenums: (number | string)[] = [];
    if (typeof List === 'string') {
      ListPokenums.push(List.toLowerCase());
    } else {
      for (let i = 1; i < Number(List) + 1; i++) {
        ListPokenums.push(i);
      }
    }

    this.PokeList.set(ListPokenums);
  }

  public GetListPokemons(): (number | string)[] {
    return this.PokeList();
  }
}
