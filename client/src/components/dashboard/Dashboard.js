import { useEffect, useState } from 'react'
import axios from 'axios'
import WineGrid from '../wineGrid/WineGrid'
import AddWine from '../wineForm/AddWine'
import EditWine from '../wineForm/EditWine'
import MainHeader from '../header/MainHeader'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setWineArr } from '../../actions/wineActions'
import Settings from '../header/Settings'
import InitialSetup from '../header/InitialSetup'
import Hamburger from '../header/Hamburger'
import ArchivedWines from '../wineGrid/ArchivedWines'
import '../../App.css'

const Dashboard = () => {
  const [updateOnPost, setUpdateOnPost] = useState(0)
  const [showAddModal, setShowAddModal] = useState({ display: 'none' })
  const [showEditModal, setShowEditModal] = useState({ display: 'none' })
  const [searchArr, setSearchArr] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [showArchived, setShowArchived] = useState(false)

  const { isAuthenticated, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    const getWines = async () => {
      try {
        const response = await axios.post('/wines/getUserWines', {
          wineList: user.wineList,
        })
        const data = response.data
        dispatch(setWineArr(data))
      } catch (err) {
        console.error(err, 'getWines error')
      }
    }
    getWines()
  }, [dispatch, user.wineList])

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login')
    }
  })

  if (!user.columns || !user.shelves) {
    return <InitialSetup setShowSettings={setShowSettings} />
  }

  return (
    <div className='dashboard'>
      <Hamburger
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      <Settings
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        setShowArchived={setShowArchived}
      />
      <MainHeader
        setSearchArr={setSearchArr}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        showArchived={showArchived}
      />
      <h1 className='header'>This is the wine we whine about</h1>
      <AddWine
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />
      <EditWine
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        updateOnPost={updateOnPost}
        setUpdateOnPost={setUpdateOnPost}
      />
      {showArchived ? (
        <ArchivedWines
          setShowEditModal={setShowEditModal}
          searchArr={searchArr}
          searchValue={searchValue}
        />
      ) : (
        <WineGrid
          updateOnPost={updateOnPost}
          setUpdateOnPost={setUpdateOnPost}
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          searchArr={searchArr}
          searchValue={searchValue}
        />
      )}
    </div>
  )
}

export default Dashboard
