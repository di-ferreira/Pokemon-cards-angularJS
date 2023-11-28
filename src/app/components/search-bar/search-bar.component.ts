import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  FindInput: string = '';

  constructor(public api: ApiService, private router: Router) {}
  FindPokemon(pokemon: string) {
    if (pokemon !== '') {
      this.api.UpdateListPokemons(pokemon);
      this.router.navigate(['/pokemon', pokemon]);
    }
  }
  FindAllPokemon() {
    this.FindInput = '';
    this.api.UpdateListPokemons();
  }
}
