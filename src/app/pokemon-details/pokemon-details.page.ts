import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokeService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokeService.getPokemonDetails(name!).subscribe((data: any) => {
      this.pokemon = data;
    });
  }
}
