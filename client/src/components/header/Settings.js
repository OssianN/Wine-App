import React, { useEffect, useState } from 'react'
import LogOutButton from './LogOutButton'
import InitialSetup from './InitialSetup'
import { useSelector } from 'react-redux'
import './settings.css'

const Settings = ({ showSettings, setShowSettings }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const wineArr = useSelector(state => state.wineArr)
  const { user } = useSelector(state => state.auth)
  const leftMargin = showSettings ? null : '-400px'

  const extractPrice = wine => {
    if (!wine.price || isNaN(wine.price)) {
      return 0
    }
    return parseInt(wine.price)
  }

  const priceReducer = (acc, curr) => acc + parseInt(curr)

  useEffect(() => {
    const totalPrice = wineArr.map(extractPrice).reduce(priceReducer, 0)
    setTotalPrice(totalPrice)
  }, [wineArr])

  return (
    <div className='settings-container' style={{ right: leftMargin }}>
      <h2>{user.name}</h2>
      <LogOutButton />
      <div className='settings__price-container'>
        <p className='settings__price-p'>Total price for this storage:</p>
        <p>{totalPrice} kr</p>
      </div>
      <InitialSetup setShowSettings={setShowSettings} />
    </div>
  )
}

export default Settings
