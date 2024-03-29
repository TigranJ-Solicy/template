import { CardContainer } from "@/components/card/types";
import { imagesPNG } from "./images";

export const cartData: Array<CardContainer> = [
  {
    title: "Example 1",
    description:
      "This is Example 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: imagesPNG.defaultImage,
  },
  {
    title: "Example 2",
    description:
      "This is Example 2. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: imagesPNG.defaultImage,
  },
  {
    title: "Example 3",
    description:
      "This is Example 2. There are many variations of passages of Lorem Ipsum available.",
    image: imagesPNG.defaultImage,
  },
];
