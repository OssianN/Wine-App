import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Search = ({ setSearchArr, searchValue, setSearchValue }) => {
  const wineArr = useSelector(state => state.wineArr);
  
  const handleChange = e => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    const handleSearch = () => {
      const newArr = wineArr
        ?.filter(card => Object.values(card)
          .join('')
          .toLowerCase()
          .match(searchValue
            .toLowerCase()));
      setSearchArr(newArr);
    };
    handleSearch();
  }, [searchValue, setSearchArr, wineArr]);

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
