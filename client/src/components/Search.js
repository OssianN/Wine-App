import React, { useEffect } from 'react'

const Search = ({ cardArr, setSearchArr, searchValue, setSearchValue }) => {
const handleChange = e => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    const handleSearch = () => {
      const newArr = cardArr
        ?.filter(card => Object.values(card)
          .join('')
          .toLowerCase()
          .match(searchValue
            .toLowerCase()));
      setSearchArr(newArr);
    };
    handleSearch();
  }, [searchValue, setSearchArr, cardArr]);

  return (
    <div className="search-container">
      <input
        type="text"
        onChange={handleChange}
        value={searchValue}
        className="search"
        placeholder='Sök'>
      </input>
    </div>
  )
}

export default Search
