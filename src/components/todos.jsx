import React, { useOptimistic, useState, useTransition } from "react";
function fakeServerAddTodo(task) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server failed"));
        return;
      }

      resolve(task);
    }, 1000);
  });
}
const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const [isPending, startTransition] = useTransition();

  const [optimisticTodos, addOptimisticTodos] = useOptimistic(
    todos,
    (cur, newTodo) => {
      return [...cur, newTodo];
    },
  );

  function handleSubmit(e) {
    e.preventDefault();
    const task = text.trim();
    if (!task) {
      return;
    }
    const todo = {
      title: task,
      status: "pending",
    };
    startTransition(async () => {
      addOptimisticTodos({ ...todo, optimistically: true });
      try {
        const realTodo = await fakeServerAddTodo(todo);

        setTodos((per) => [...per, realTodo]);
      } catch (r) {
        console.log(r);
      } finally {
        setText("");
      }
    });
  }
  return (
    <div>
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
            {"add"}
          </button>
        </form>

        <ul>
          {optimisticTodos.map((item, index) => {
            return (
              <li key={index}>
                {item.optimistically ? `${item.title}  ⏳` : item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
