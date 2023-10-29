import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent implements OnInit {
  pokemon: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.pokemon = String(param.get('pokemon'));
    });
  }
}
