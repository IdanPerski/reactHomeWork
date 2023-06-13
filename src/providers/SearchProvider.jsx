import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";
const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [search, setSearch] = useState([]);
  const [renderNoResult, setRenderNoresult] = useState(false);

  const handleSearch = (targetValue, keyMatch, searchAt) => {
    const filterdArray = searchAt?.filter((card) => {
      if (card[keyMatch].includes(targetValue)) return card._id;
    });
    setRenderNoresult(filterdArray.length === 0);
    setSearch(filterdArray);
  };

  const constextValue = {
    search,
    handleSearch,
    renderNoResult,
    setRenderNoresult,
  };

  return (
    <SearchContext.Provider value={constextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export { SearchContext };
SearchProvider.propTypes = {
  children: propTypes.node.isRequired,
};
