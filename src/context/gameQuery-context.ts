import { createContext } from "react";
import { GameQuery } from "../App";

interface gameQueryContext {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

export const gameQueryContext = createContext({} as gameQueryContext);
