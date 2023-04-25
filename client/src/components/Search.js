import React, { useState } from "react";

function Search({ setSearch }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(value);
  }

  return (
    <form className="p-4 fs-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search workouts"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
