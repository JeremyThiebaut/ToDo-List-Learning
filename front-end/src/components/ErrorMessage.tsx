interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="todo__error">{message}</div>;
};

export default ErrorMessage;
