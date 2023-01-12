import { useEffect, useId, useState } from "react";

const UseIdExample = () => {
  const [search, setSearch] = useState("");
  const id = useId();
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();

  useEffect(() => {
    console.log({ id, id1, id2, id3 });
  }, [search]);

  return (
    <>
      <div>
        <input
          type={"text"}
          value={search}
          placeholder="Search here...!"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default UseIdExample;
