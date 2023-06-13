import { useMemo, useState } from "react";

export default function useSearch() {
  console.log("useSearch On");
  const [search, setSearch] = useState([]);
  const handleSearch = (targetValue, keyMatch, searchAt) => {
    const filterdArray = searchAt?.filter((card) => {
      if (card[keyMatch] && card[keyMatch].includes(targetValue))
        return card._id;
    });
    return setSearch(filterdArray);
  };

  return { handleSearch, search };
}
