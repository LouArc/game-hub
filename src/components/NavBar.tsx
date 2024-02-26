import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import GenreMenu from "./GenreMenu";

interface Props {
  onSearch: (searchText: string) => void;
  base: boolean;
}

const NavBar = ({ onSearch, base }: Props) => {
  return (
    <HStack padding="10px">
      {base && <GenreMenu />}
      {!base && <Image src={logo} boxSize="60px" />}
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
