import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import thumbsDown from "../assets/thumbs-down.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    //index signature
    1: { src: thumbsDown, alt: "Not recomended", boxSize: "25px" },
    2: { src: thumbsDown, alt: "Not recomended", boxSize: "25px" },
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recomended", boxSize: "25px" },
    5: { src: bullsEye, alt: "expecional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
