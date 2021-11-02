import React, { useState, useEffect } from 'react'
import { updateDatabase } from './utils'
import { useDispatch, useSelector } from 'react-redux'
import { archiveWine } from '../../actions/wineActions'

const ArchiveButton = ({
  buttonName,
  areYouSure,
  setAreYouSure,
  setShowEditModal,
  saveOrClearForm,
}) => {
  const [showArchive, setShowArchive] = useState('none')
  const dispatch = useDispatch()
  const { pickedWine } = useSelector(state => state)

  const handleAreYouSure = () => setAreYouSure(!areYouSure)

  const handleShowArchive = () => {
    if (buttonName === 'Change Wine') {
      setShowArchive('grid')
    } else {
      setShowArchive('none')
    }
  }

  const handleArchive = async e => {
    try {
      updateDatabase({ ...pickedWine, archived: true })
      dispatch(archiveWine(pickedWine))
      setShowEditModal({ display: 'none' })
      handleAreYouSure()
      saveOrClearForm()
    } catch (err) {
      alert('A server error occured.', err)
      console.error(err)
    }
  }

  useEffect(() => {
    handleShowArchive()
  })

  return (
    <div className='archive-button-container' style={{ display: showArchive }}>
      <button
        type='button'
        onClick={handleAreYouSure}
        className='btn--enforced btn--form-archive'
        style={{ display: areYouSure ? 'none' : 'block' }}>
        Archive
      </button>
      {areYouSure ? (
        <>
          <p className='confirm-archive__p'>
            Are you sure you want to archive this wine?
          </p>
          <button
            type='button'
            className='btn--enforced btn-archive--yes'
            onClick={handleArchive}>
            yes
          </button>
          <button
            type='button'
            className='flat-button--border btn-archive--no'
            onClick={handleAreYouSure}>
            no
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default ArchiveButton
