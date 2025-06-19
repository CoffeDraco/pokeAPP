import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pokemons: any[] = [];
  offset = 0;
  limit = 20;  // Quantidade de Pokémons por página

constructor(
  private pokeService: PokeService,
  public favoritesService: FavoritesService
) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeService.getPokemons(this.limit, this.offset).subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.pokeService.getPokemonDetails(result.name).subscribe((details: any) => {
          this.pokemons.push({
            name: result.name,
            image: details.sprites.front_default
          });
        });
      });
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }
  
  toggleFavorite(name: string) {
  if (this.favoritesService.isFavorite(name)) {
    this.favoritesService.removeFavorite(name);
  } else {
    this.favoritesService.addFavorite(name);
  }
}
}

