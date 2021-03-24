import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const MainHeader = ({ setSearchArr, searchValue, setSearchValue }) => {
  const wineArr = useSelector(state => state.wineArr);
  
  const handleChange = e => {
    setSearchValue(e.target.value);
  }

  const searchableValues = arr => (
    arr[0] === 'title' ||
    arr[0] === 'year' ||
    arr[0] === 'country' ||
    arr[0] === 'rating'
    ? arr[1]
    : ''
  );

  useEffect(() => {
    const handleSearch = () => {
      const newArr = wineArr
        ?.filter(card => Object.entries(card)
          .map(searchableValues) 
          .join('')
          .toLowerCase()
          .match(searchValue
            .toLowerCase()));
      setSearchArr(newArr);
    };
    handleSearch();
  }, [searchValue, setSearchArr, wineArr]);

  return (
    <div className="main-header">
      <input
        type="text"
        onChange={handleChange}
        value={searchValue}
        className="search"
        placeholder='search'>
      </input>
    </div>
  )
}

export default MainHeader
