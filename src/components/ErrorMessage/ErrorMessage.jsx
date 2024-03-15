const ErrorMessage = ({ message = "" }) => {
  return (
    <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
      {message.length > 0 ? message : "Упс шось пішло не так"}
    </p>
  );
};

export default ErrorMessage;
