import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  FindInput: string = '';
  constructor(public api: ApiService) {}
  FindPokemon(pokemon: string) {
    if (pokemon !== '') {
      this.api.UpdateListPokemons(pokemon);
    }
  }
  FindAllPokemon() {
    this.FindInput = '';
    this.api.UpdateListPokemons();
  }
}
