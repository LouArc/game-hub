import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import GenreMenu from "./GenreMenu";
import { GameQuery } from "../App";

interface Props {
  onSearch: (searchText: string) => void;
  base: boolean;
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const NavBar = ({ onSearch, base, gameQuery, setGameQuery }: Props) => {
  return (
    <HStack padding="10px">
      {base && <GenreMenu gameQuery={gameQuery} setGameQuery={setGameQuery} />}
      {!base && <Image src={logo} boxSize="60px" />}
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
