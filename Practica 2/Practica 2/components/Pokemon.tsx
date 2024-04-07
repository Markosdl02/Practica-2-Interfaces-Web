import { FunctionComponent } from "preact";

type PokemonProps = {
  name: string;
  image: string;
  audio: string;
};

const Pokemon: FunctionComponent<PokemonProps> = (props) => {
    const { name, image, audio } = props;
    return (
      <div className="PokemonContainer">
        <h2 className="text-overflow">{name}</h2>
        <img className="img-m half-rounded" src={image} />
        <audio controls>
          <source src={audio}/>
        </audio>
      </div>
    );
};

export default Pokemon;