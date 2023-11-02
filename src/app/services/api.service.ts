import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iPokemonResponse } from '../model/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = environment.api;
  private PokeList = signal<(number | string)[]>([]);
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
}
