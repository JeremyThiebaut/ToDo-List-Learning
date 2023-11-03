const validateTodo = (
  todo: string,
  t: (key: string) => string
): string | null => {
  if (todo.length <= 0) {
    return t("to_short");
  }
  return null;
};

export default validateTodo;
