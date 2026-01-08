// import Count from "./components/count";
// import PasswordInput from "./components/password-input";
// import UserList from "./components/userlist";

// import AccordionWrapper from "./components/ui/Accordion";
// import AccordionItem from "./components/ui/accordion-item";
// function App() {
//   const accordionItems = [
//     { q: "what is react ?", answer: "react is js library..." },
//     { q: "what is react ?", answer: "react is js library..." },
//   ];
//   // function handleClick(event) {
//   //   console.log("button clicked", event);
//   // }

//   // function handleChange() {
//   //   console.log("change");
//   // }

//   return (
//     <>
//       {/* <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         <Card
//           title={"title of card 1"}
//           content={
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quis impedit nulla quasi voluptatum, quo, ipsam ducimus porro obcaecati commodi eius."
//           }
//         />
//         <Card
//           title={"title of card 2"}
//           content={
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quis impedit nulla quasi voluptatum, quo, ipsam ducimus porro obcaecati commodi eius."
//           }
//         />
//         <Card
//           title={"title of card 3"}
//           content={
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quis impedit nulla quasi voluptatum, quo, ipsam ducimus porro obcaecati commodi eius."
//           }
//         />
//         <Card
//           title={"title of card 4"}
//           content={
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quis impedit nulla quasi voluptatum, quo, ipsam ducimus porro obcaecati commodi eius."
//           }AccordionWrapper
//         />
//       </div>
//       <Button whenClicked={handleClick} variant="error" label="cancel" />
//       <Button variant="primary">
//         <span>click me</span>
//       </Button>
//       <Button label="add item" />

//       <Input placeholder="enter your name" onChange={handleChange} /> */}

//       {/* <LearnLoop /> */}

//       {/* <MyComponent username={"alireza"} age={31} /> */}
//       {/* <ShowInputValue /> */}
//       {/* <PasswordInput /> */}
//       {/* <UserList /> */}
//       {/* <Count /> */}

//       <AccordionWrapper items={accordionItems} />
//       {/* <AccordionItem title={"1- what is React ?"}>
//           react is js library....
//         </AccordionItem>
//         <AccordionItem title={"2- what is React ?"}>
//           react is js library....
//         </AccordionItem>
//       </AccordionWrapper> */}
//     </>
//   );
// }
// export default App;

// // title => h2
// // content => paragraph

import React, { useState } from "react";
import Posts from "./components/posts";
import WindowResize from "./components/window-resize";

const App = () => {
  const [showResize, setShowResize] = useState(true);
  return (
    <div>
      <button onClick={() => setShowResize(!showResize)}>show resize</button>
      {showResize && <WindowResize />}
    </div>
  );
};

export default App;
