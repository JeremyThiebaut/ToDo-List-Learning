const validateTodo = (todo: string, text: string): string | null => {
  if (todo.length <= 0) {
    return text;
  }
  return null;
};

export default validateTodo;
