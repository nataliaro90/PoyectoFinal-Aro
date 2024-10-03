const Button = ({ eventHandler, label = "Click", className = "", type = "button" }) => {
  return (
      <button onClick={eventHandler} className={className} type={type}>
          {label}
      </button>
  );
};

export default Button;
