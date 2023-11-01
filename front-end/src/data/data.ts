import { randText } from "@ngneat/falso";

type Todo = {
  description: string;
};

const todoArray: Todo[] = [
  {
    description: randText(),
  },
  {
    description: randText(),
  },
  {
    description: randText(),
  },
  {
    description: randText(),
  },
];

export default todoArray;
