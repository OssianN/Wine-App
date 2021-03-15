import React, { useState, useEffect } from 'react'

const Search = ({ cardArr, setSearchArr, searchValue, setSearchValue }) => {
const handleChange = e => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (cardArr) => {
    const newArr = [];
    cardArr?.forEach(card => {
      const objectArr = Object.values(card).join('').toLowerCase();
      if (objectArr.match(searchValue.toString().toLowerCase())) {
        newArr.push(card);
      }
    })
    setSearchArr(newArr);
  }

  useEffect(() => {
    handleSearch(cardArr);
  }, [searchValue])

  return (
    <div className="search-container">
      <input type="text" onChange={handleChange} value={searchValue} className="search" placeholder='Sök'>
      </input>
    </div>
  )
}

export default Search
