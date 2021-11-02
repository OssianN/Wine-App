import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Search = ({
  setSearchArr,
  searchValue,
  setSearchValue,
  showArchived,
}) => {
  const wines = useSelector(state => state.wineArr.wines)
  const archived = useSelector(state => state.wineArr.archived)

  const wineArr = showArchived ? archived : wines

  const handleChange = e => {
    setSearchValue(e.target.value)
  }

  const searchableValues = arr =>
    arr[0] === 'title' ||
    arr[0] === 'year' ||
    arr[0] === 'country' ||
    arr[0] === 'price' ||
    arr[0] === 'rating'
      ? arr[1]
      : ''

  const searchNumber = string => parseInt(string.match(/[0-9]+/)?.[0])

  useEffect(() => {
    if (!wineArr) return

    const handleSearch = () => {
      const newArr = wineArr?.filter(card =>
        Object.entries(card)
          .map(searchableValues)
          .join('')
          .toLowerCase()
          .match(searchValue.toLowerCase())
      )
      setSearchArr(newArr)
    }
    handleSearch()
  }, [searchValue, setSearchArr, wineArr])

  useEffect(() => {
    const filterRating = () => {
      if (searchValue?.match(/rating/i)) {
        const ratingMatch = wineArr?.filter(
          wine => parseInt(wine.rating) >= searchNumber(searchValue)
        )
        setSearchArr(ratingMatch)
      }
    }
    filterRating()
  }, [searchValue, setSearchArr, wineArr])

  useEffect(() => {
    const filterPrice = () => {
      if (searchValue?.match(/kr/i)) {
        const numberMatch = wineArr?.filter(
          wine => parseInt(wine.price) <= searchNumber(searchValue)
        )
        setSearchArr(numberMatch)
      }
    }
    filterPrice()
  }, [searchValue, setSearchArr, wineArr])

  return (
    <>
      <input
        type='text'
        onChange={handleChange}
        value={searchValue}
        className='search'
        placeholder='search'></input>
    </>
  )
}

export default Search
