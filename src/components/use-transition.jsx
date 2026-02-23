import { useMemo, useState, useTransition } from "react";

function makeBigList() {
  return Array.from({ length: 20000 }, (_, i) => `Item ${i + 1}`);
}
const bigList = makeBigList();
const TransitionList = () => {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [filterQuery, setFilterQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    setQuery(value);
    startTransition(() => {
      setFilterQuery(value);
    });
  }
  console.time("list");
  const listFiltered = useMemo(() => {
    return bigList.filter((item) => {
      return item.toLowerCase().includes(filterQuery.toLowerCase());
    });
  }, [filterQuery]);
  console.timeEnd("list");
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="filter... "
        className="border border-gray-400 rounded-md
       p-2"
      />
      <br />
      <br />
      <p> filter for {filterQuery} </p>
      <br />
      <br />
      {isPending && <p>filtering...</p>}

      <ul>
        {listFiltered.slice(0, 1000).map((item, i) => {
          return <li key={i}>{item} </li>;
        })}
      </ul>
    </div>
  );
};

export default TransitionList;
