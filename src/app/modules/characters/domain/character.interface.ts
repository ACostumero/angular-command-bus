export interface CharactersResponseApi {
  info: InfoApi;
  results: CharacterApi[];
}

export interface InfoApi {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface CharacterApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationApi;
  location: LocationApi;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface LocationApi {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}
