import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContainerCardsComponent } from './components/container-cards/container-cards.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { RouterModule } from '@angular/router';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ContainerCardsComponent,
    CardComponent,
    PokemonPageComponent,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PokemonListComponent,
      },
      {
        path: 'pokemon/:pokemon',
        component: PokemonPageComponent,
      },
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
