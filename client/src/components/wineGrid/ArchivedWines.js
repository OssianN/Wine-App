import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import './grid.css'

const ArchivedWines = ({ setShowEditModal, searchValue, searchArr }) => {
  const wines = useSelector(state => state.wineArr.archived)

  const wineArr = searchValue ? searchArr : wines

  return (
    <div className='archived__container'> 
      {wineArr.map((wine, i) => {
        return <Card key={i} card={wine} setShowEditModal={setShowEditModal} />
      })}
    </div>
  )
}

export default ArchivedWines
