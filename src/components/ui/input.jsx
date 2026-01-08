const Input = (props) => {
  return (
    <input
      type="text"
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="p-1 border border-gray-300 rounded-sm"
    />
  );
};
export default Input;
