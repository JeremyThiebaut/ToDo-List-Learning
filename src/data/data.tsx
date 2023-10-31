import { randFirstName, randText } from "@ngneat/falso";

type Todo = {
  title: string;
  description: string;
};

const todoArray: Todo[] = [
  {
    title: randFirstName(),
    description: randText(),
  },
  {
    title: randFirstName(),
    description: randText(),
  },
  {
    title: randFirstName(),
    description: randText(),
  },
  {
    title: randFirstName(),
    description: randText(),
  },
  {
    title: randFirstName(),
    description: randText(),
  },
  {
    title: randFirstName(),
    description: randText(),
  },
];

export default todoArray;
