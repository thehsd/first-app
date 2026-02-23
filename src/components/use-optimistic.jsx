// import clsx from "clsx";
// import React, { useOptimistic, useState, useTransition } from "react";

// function fakeServerToggleLike(current) {
//   console.log("start");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.25) reject(new Error("Server error"));
//       resolve(!current);
//       console.log("end");
//     }, 1800);
//   });
// }

// const OptimisticHook = () => {
//   const [liked, setLiked] = useState(false);
//   const [isPending, startTransition] = useTransition();
//   console.log("  ~ isPending : ", isPending);

//   const [optimisticState, setOptimistic] = useOptimistic(
//     liked,
//     (_, nextLiked) => nextLiked,
//   );

//   const handleClick = () => {
//     startTransition(async () => {
//       setOptimistic(!optimisticState);
//       try {
//         const serverResponse = await fakeServerToggleLike(liked);

//         setLiked(serverResponse);
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   };

//   return (
//     <div>
//       <button
//         className={clsx("rounded-md border-none bg-red-200 cursor-pointer p-3")}
//         onClick={handleClick}
//       >
//         {optimisticState ? "❤️ Liked" : "🤍 Like"}
//       </button>
//       <br />
//       <br />
//       <p>real server state{liked ? "liked " : "no"}</p>
//     </div>
//   );
// };

// export default OptimisticHook;

import { useOptimistic, useState, useTransition } from "react";

function fakeServerAddTodo(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server failed"));
        return;
      }

      resolve({
        id: Math.random().toString(36).slice(2),
        text,
      });
    }, 1000);
  });
}

export default function OptimisticTodo() {
  const [todos, setTodos] = useState([
    // { id: "1", text: "Learn useOptimistic" },
    // { id: "2", text: "Teach it in class" },
  ]);

  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const [isPending, startTransition] = useTransition();

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo) => {
      return [...currentTodos, newTodo];
    },
  );

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const value = text.trim();
    if (!value) return;

    setText("");

    // یک todo موقت (optimistic)
    const tempTodo = {
      id: "temp-" + Date.now(),
      text: value,
      pending: true,
    };

    startTransition(async () => {
      addOptimisticTodo(tempTodo);

      try {
        const realTodo = await fakeServerAddTodo(value);

        setTodos((prev) => [...prev, realTodo]);
      } catch (e) {
        console.log("  ~ e : ", e);
        setError("Server error: todo was not saved.");
      }
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2>Optimistic Todo (useOptimistic + useTransition)</h2>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a todo..."
          disabled={isPending}
          className="border border-gray-400 rounded-md
       p-2"
        />
        <button
          disabled={isPending}
          className="rounded-md border border-gray-600 px-8 py-2 bg-gray-200"
        >
          {isPending ? "Adding..." : "Add"}
        </button>
      </form>

      {error && <p style={{ marginTop: 10, color: "crimson" }}>{error}</p>}

      <ul style={{ marginTop: 14 }}>
        {optimisticTodos.map((todo) => (
          <li key={todo.id} style={{ opacity: todo.pending ? 0.6 : 1 }}>
            {todo.text} {todo.pending ? "⏳" : ""}
          </li>
        ))}
      </ul>
      <code>
        {`function fakeServerAddTodo(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server failed"));
        return;
      }

      resolve({
        id: Math.random().toString(36).slice(2),
        text,
      });
    }, 1000);
  });
}`}
      </code>
    </div>
  );
}
