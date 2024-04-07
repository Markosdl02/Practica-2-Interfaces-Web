import { PageProps } from "$fresh/server.ts";


export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      <div class="header">
        <a href="/ListaPokemons">Mostrar Lista</a>
        <a href="/Buscar">Buscar Pokemons</a>
        <a href="/CrearPokemon">Crear Pokemon</a>
      </div>
      <h1>Mi Pokedex</h1>
      <Component />
    </div>
  );
}