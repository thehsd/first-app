function Button(props) {
  function getVariantStyle() {
    if (props.variant === "error") {
      return ` bg-red-400 hover:bg-red-900 duration-900 transition text-white`;
    } else if (props.variant === "primary") {
      return ` bg-sky-400 text-white`;
    } else {
      return `bg-gray-400`;
    }
  }

  return (
    <button
      onClick={props.whenClicked}
      className={`px-8 py-4 rounded-md cursor-pointer ${getVariantStyle()}`}
    >
      {props.children || props.label}
    </button>
  );
}

export default Button;
