import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";


const Buscar: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [pokemons, setPokemons] = useState<string[]>([]);

  const onSearch = async (searchText: string): Promise<void> => {
    const url = `https://lospoquimones.deno.dev/:name=${searchText}`;
    const response = await axios.get<{ results: { name: string }[] }>(url);
    const names = response.data.results.map((r) => r.name);
    setPokemons(names);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Pokemon"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSearch(name);
          }}
        >
          Buscar
        </button>
      </form>
      {pokemons.length > 0 && pokemons.map((n) => <div key={n}>{n}</div>)}
    </div>
  );
};

export default Buscar;