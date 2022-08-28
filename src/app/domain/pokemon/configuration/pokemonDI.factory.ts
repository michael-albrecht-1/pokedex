import { HttpClient } from '@angular/common/http';
import { PokemonBuilder } from '../usecases/pokemon.builder';
import { Pokemon } from '../entity/pokemon';
import { PokemonLoader } from '../loaders/PokemonLoader';
import { InMemoryPokemonLoader } from '../adapters/secondaries/inmemory/inmemoryPokemon.loader';
import { environment, SOURCES } from 'src/environments/environment';
import { RESTPokeApiPokemonLoader } from '../adapters/secondaries/real/REST-poke-api/RESTPokeApiPokemon.loader';
import { RESTMongoPokemonLoader } from '../adapters/secondaries/real/REST-mongo/RESTMongoPokemon.loader';

export class PokemonDIFactory {
  static pokemonLoader(http: HttpClient): PokemonLoader {
    switch (environment.source) {
      case SOURCES.rest:
        return new RESTMongoPokemonLoader(http);
      case SOURCES.restPokeApi:
        return new RESTPokeApiPokemonLoader(http);
      default:
        const pickachu: Pokemon = new PokemonBuilder()
          .withNumber('25')
          .withName('Pickachu')
          .withDescription('Lorem Ipsum of pickachu')
          .withHeight(1.3)
          .withWeight(0.7)
          .withAvatar('http://via.placeholder.com/475px475')
          .build();
        const salameche: Pokemon = new PokemonBuilder()
          .withNumber('4')
          .withName('Salameche')
          .withDescription('Lorem Ipsum of salameche')
          .withHeight(1.7)
          .withWeight(30)
          .withAvatar('http://via.placeholder.com/475px475')
          .build();
        const mewtwo: Pokemon = new PokemonBuilder()
          .withNumber('150')
          .withName('Mewtwo')
          .withDescription('Lorem Ipsum of mewtwo')
          .withHeight(2)
          .withWeight(100)
          .withAvatar('http://via.placeholder.com/475px475')
          .build();
        return new InMemoryPokemonLoader([pickachu, salameche, mewtwo]);
    }
  }
}
