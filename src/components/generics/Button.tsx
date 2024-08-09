const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, ...rest } = props;

  const buttonStyle: React.CSSProperties = {
    width: "auto",
    padding: "1rem",
    margin: ".5rem",
    borderRadius: "2rem",
  };

  return (
    <button style={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
