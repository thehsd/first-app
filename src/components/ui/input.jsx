const Input = ({ type, placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-1 border border-gray-300 rounded-sm"
      {...props}
    />
  );
};
export default Input;
