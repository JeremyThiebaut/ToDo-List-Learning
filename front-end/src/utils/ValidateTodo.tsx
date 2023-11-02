export const validateTodo = (todo: string): string | null => {
  if (todo.length < 5) {
    return "Todo must be at least 5 characters long";
  }
  return null;
};
