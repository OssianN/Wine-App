import React from 'react'

const ArchiveButton = ({ areYouSure, handleAreYouSure }) => {
  if (areYouSure) {
    return null
  }

  return (
    <button
      type='button'
      onClick={handleAreYouSure}
      className='btn--enforced btn--form-archive'
      style={{ display: areYouSure ? 'none' : 'block' }}>
      Archive
    </button>
  )
}

export default ArchiveButton
