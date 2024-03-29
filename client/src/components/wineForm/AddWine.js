import React from 'react'
import axios from 'axios'
import WineForm from './WineForm'
import { useDispatch, useSelector } from 'react-redux'
import { setWineArr } from '../../actions/wineActions'
import { setUserStorage } from '../../actions/authActions'

const AddWine = props => {
  const dispatch = useDispatch()
  const wineArr = useSelector(state => state.wineArr)
  const pickedWine = useSelector(state => state.pickedWine)
  const { shelf, column } = pickedWine
  const { user } = useSelector(state => state.auth)

  const postData = async data => {
    try {
      dispatch(
        setWineArr([...wineArr, { shelf, column, country: 'loading...' }])
      )
      const newWine = await axios.post('/wines', data)
      dispatch(setWineArr([...wineArr, newWine.data]))
      const updateUser = await axios.post('/users/addWine', {
        _id: newWine.data._id,
        email: user.email,
      })
      const { token } = updateUser.data
      dispatch(setUserStorage(token))
    } catch (err) {
      alert('A server error occured:', err.message)
    }
  }

  return (
    <div className='wineModal' style={props.showAddModal}>
      <WineForm
        method={postData}
        buttonName='Add Wine'
        show={props.setShowAddModal}
      />
    </div>
  )
}

export default AddWine
