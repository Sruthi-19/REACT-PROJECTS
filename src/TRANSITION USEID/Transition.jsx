import { useState, useTransition } from "react";

const Transition = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const onSearch = (e) => {
    setSearch(e.target.value);
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 20000; i++) {
        newList.push(e.target.value);
      }

      setList(newList);
    });
  };

  return (
    <>
      <div>
        <input
          type={"text"}
          value={search}
          placeholder="Search here!"
          onChange={onSearch}
        />
      </div>
      <div>
        <h1>My Search</h1>
        <ul>
          {isPending
            ? "Loading"
            : list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
        </ul>
      </div>
    </>
  );
};

export default Transition;
