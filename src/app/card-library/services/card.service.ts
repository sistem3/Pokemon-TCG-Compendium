import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
// Interfaces
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(queryConfig: any): Observable<any> {
    const queryParams = new HttpParams({fromObject: queryConfig}).toString();
    return this.http.get(environment.ptcgAPIBaseURL + 'cards?' + queryParams, {observe: 'response'});
  }

  getBlankCard(): Card {
    return {
      id: '',
      name: '',
      supertype: '',
      subtypes: [],
      level: '',
      hp: '',
      types: [],
      evolvesFrom: '',
      evolvesTo: '',
      rules: [],
      ancientTrait: {
        name: '',
        text: ''
      },
      abilities: [{
        name: '',
        text: '',
        type: ''
      }],
      attacks: [{
        cost: [],
        name: '',
        text: '',
        damage: '',
        convertedEnergyCost: 0
      }],
      weaknesses: [{
        type: '',
        value: ''
      }],
      resistances: [{
        type: '',
        value: ''
      }],
      retreatCost: [],
      convertedRetreatCost: 0,
      set: {},
      number: '',
      artist: '',
      rarity: '',
      flavorText: '',
      nationalPokedexNumbers: [],
      legalities: {
        standard: '',
        expanded: '',
        unlimited: ''
      },
      regulationMark: '',
      images: {
        small: '',
        large: ''
      },
      tcgplayer: {
        url: '',
        updatedAt: '',
        prices: {}
      },
      cardmarket: {
        url: '',
        updatedAt: '',
        prices: {}
      }
    };
  }
}
