import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number) {
    return this.http.get(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string) {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}