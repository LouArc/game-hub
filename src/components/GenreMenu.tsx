import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import GenreList from "./GenreList";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const GenreMenu = ({ gameQuery, setGameQuery }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="ghost" onClick={onOpen}>
        <TiThMenu size="40px" />
      </Button>
      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
                onClose();
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreMenu;
