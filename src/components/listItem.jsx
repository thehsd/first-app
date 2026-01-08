const ListItem = (props) => {
  return (
    <li className="bg-gray-50 cursor-pointer hover:bg-gray-200 w-fit px-3 py-1.5 rounded-sm">
      {props.children}
    </li>
  );
};
export default ListItem;
