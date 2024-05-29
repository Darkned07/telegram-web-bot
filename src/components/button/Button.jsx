import "./button.css";

function Button({ type, title, onClick, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      } ${disable === true && "disabled"}`}
    >
      {title}
    </button>
  );
}

export default Button;
