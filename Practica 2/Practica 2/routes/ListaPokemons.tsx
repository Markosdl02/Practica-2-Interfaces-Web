import axios from "npm:axios";
import Pokemon from "../components/Pokemon.tsx";
type Pokemon = {
  _id: string;
  name: string;
  image: string;
  sound: string;
};

type PokemonResponse = {
  results: Pokemon[];
};

export default async function Page() {
  try {
    const response = await axios.get<PokemonResponse>(
      "https://lospoquimones.deno.dev/",
    );
    const pokemons = response.data;
    return (
      <div class="flex-column">
        <h1 class="mainTitle">Lista de Pokemons</h1>
        <div class="flex-row flex-around">
          {pokemons.map((char) => (
            <Pokemon
            key={char._id}
            name={char.name}
            image={char.image}
            audio={char.sound}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
  