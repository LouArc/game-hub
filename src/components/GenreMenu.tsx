import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import GenreList from "./GenreList";
import { useContext } from "react";
import { gameQueryContext } from "../context/gameQuery-context";

const GenreMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { gameQuery, setGameQuery } = useContext(gameQueryContext);

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
