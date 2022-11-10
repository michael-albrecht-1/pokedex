import { SOURCES } from 'config/sources';

enum mongoURL {
  mongoLocal = 'http://localhost:5500',
  mongoVercel = 'https://missions-to-get-pokemons-backend-wxop.vercel.app',
}

export const environment = {
  production: false,
  pokemonSource: SOURCES.mongo,
  pokemonCaughtSource: SOURCES.mongo,
  pokemonTypesSource: SOURCES.mongo,
  missionSource: SOURCES.mongo,

  mongoURL: mongoURL.mongoLocal,
};
