import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="px-4 py-2 text-sm transition-all duration-300 bg-yellow-100 rounded-full w-36 palcehoder:text-stone-400 sm:w-64 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-500"
      />
    </form>
  );
}

export default SearchOrder;
