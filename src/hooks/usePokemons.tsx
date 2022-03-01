import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

interface Pokemon {
  name: string;
  url: string;
  isFavorite: boolean;
}

interface PokemonsProviderProps {
  children: ReactNode;
}

interface PokemonsContextData {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemon: Pokemon) => void;
}

const PokemonsContext = createContext<PokemonsContextData>(
  {} as PokemonsContextData
);

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {}, []);

  const addPokemon = (pokemon: Pokemon) => {
    const verifyPokemon = pokemons.find((item) => item.name === pokemon.name);
    if (!verifyPokemon) setPokemons([...pokemons, pokemon]);
  };

  const removePokemon = (pokemon: Pokemon) => {
    const pokemonsFilter = pokemons.filter(
      (item) => item.name !== pokemon.name
    );
    setPokemons(pokemonsFilter);
  };

  return (
    <PokemonsContext.Provider value={{ pokemons, addPokemon, removePokemon }}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokemonsContext);

  return context;
}
