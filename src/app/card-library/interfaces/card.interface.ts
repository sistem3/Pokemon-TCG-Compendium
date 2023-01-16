export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: Array<string>;
  level: string;
  hp: string;
  types: Array<string>;
  evolvesFrom: string;
  evolvesTo: string;
  rules: Array<string>;
  ancientTrait: {
    name: string;
    text: string;
  };
  abilities: Array<{
    name: string;
    text: string;
    type: string;
  }>;
  attacks: Array<{
    cost: Array<string>;
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: number;
  }>;
  weaknesses: Array<{
    type: string;
    value: string;
  }>;
  resistances: Array<{
    type: string;
    value: string;
  }>;
  retreatCost: Array<string>;
  convertedRetreatCost: number;
  set: any;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: Array<number>;
  legalities: {
    standard: string;
    expanded: string;
    unlimited: string;
  };
  regulationMark: string;
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: any;
  };
  cardmarket: {
    url: string;
    updatedAt: string;
    prices: any;
  };
}
