import axios from "npm:axios";
import { FunctionComponent } from "preact";
import Pokemon from "../components/Pokemon.tsx";
import { useState } from "preact/hooks";

type Pokemon = {
  _id: string;
  name: string;
  image: string;
  sound: string;
  creator:string;
};


const PokemonManager: FunctionComponent = () => {

    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [sound, setSound] = useState<string>("");
    const [creator, setCreator] = useState<string>("");

    const handleSubmit = async () => {
        try {
          await axios.post("https://lospoquimones.deno.dev/", {
            name,
            image,
            sound,
            creator
          });
          setName("");
          setImage("");
          setSound("");
          setCreator("");
          alert("¡Pokémon creado con éxito!");
        } catch (error) {
          console.error("Error al crear el Pokémon:", error);
          alert(
            "Error al crear el Pokémon. Por favor, inténtalo de nuevo más tarde."
          );
        }
      };

    return (
        <>
          <div class="PokemonForm">
            <h2>Añadir nuevo pokemon</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onInput={(e) => {
                setName(e.currentTarget.value);
              }}
            />
            <input
              type="text"
              placeholder="Image"
              value={image}
              onInput={(e) => {
                setImage(e.currentTarget.value);
              }}   
            />
            <input
              type="text"
              placeholder="Sonido"
              value={sound}
              onInput={(e) => {
                setSound(e.currentTarget.value);
              }}   
            />
            <input
              type="text"
              placeholder="Creator"
              value={creator}
              onInput={(e) => {
                setCreator(e.currentTarget.value);
              }}   
            />
            <button onClick={handleSubmit}>Añadir pokemon</button>
          </div>
        </>
      );
  };
  
  export default PokemonManager;