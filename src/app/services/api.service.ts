import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iPokemonResponse, iSpeciesResponse } from '../model/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = environment.api;
  private PokeList = signal<(number | string)[]>([]);
  private CurrentPokemon = signal<iPokemonResponse>({
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    base_experience: 0,
    species: {
      base_happiness: 0,
      capture_rate: 0,
      evolution_chain: {
        url: '',
      },
      evolves_from_species: {
        name: '',
        url: '',
      },
      flavor_text_entries: [],
      form_descriptions: [],
      forms_switchable: false,
      gender_rate: 0,
      has_gender_differences: false,
      hatch_counter: 0,
      id: 0,
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      name: '',
      order: 0,
      shape: {
        name: '',
        url: '',
      },
    },
    stats: [],
    types: [],
    moves: [],
    abilities: [],
  });
  constructor(private httpClient: HttpClient) {}

  GetPokemon(pokeName: string | number) {
    return this.httpClient.get<iPokemonResponse>(
      `${this.url}/pokemon/${pokeName}`
    );
  }

  GetPokemonUtilities<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
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

  public GetCurrentPokemon(): iPokemonResponse {
    return this.CurrentPokemon();
  }

  public SetCurrentPokemon(pokemon: iPokemonResponse) {
    this.CurrentPokemon.set(pokemon);
  }
}
