import ListItem from "./listItem";

function LearnLoop() {
  const list = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

  //
  //   const printItems = () => {
  //     return list.map((item) => {
  //       return <li>{item}</li>;
  //     });
  //   };

  return (
    <div>
      {/* <ul>{printItems()}</ul> */}
      <ul>
        {list.map((item, i) => {
          return <ListItem key={i}>{item}</ListItem>;
        })}
      </ul>
    </div>
  );
}

export default LearnLoop;
