// import { useState } from "react";
// import { userData } from "../constant/user-data";
// import UserCard from "./usercard";

import { useState } from "react";

const UserList = () => {
  //   const [showList, setShowList] = useState(0);

  //   const handleShow = () => {
  //     setShowList(showList ? 0 : 1);
  //   };
  const [number, setNumber] = useState(0);
  return (
    <>
      {/* <button onClick={handleShow}>
        show user list {showList ? "true" : "false"}
      </button>
      {showList ? (
        <div className="grid grid-cols-4 gap-2">
          {userData.map((user) => {
            return <UserCard key={user.id} userData={user} />;
          })}
        </div>
      ) : (
        ""
      )} */}

      <div>
        {" "}
        <button onClick={inc}>+</button> {number}{" "}
        <button onClick={dec}>-</button>
      </div>
    </>
  );
};

export default UserList;
