import React from 'react'

const AreYouSureButtons = ({
  areYouSure,
  handleAreYouSure,
  handleArchive,
  handleDelete,
  pickedWine,
}) => {
  return (
    <>
      {areYouSure ? (
        <div className="are-you-sure__container">
          <p className='confirm-archive__p'>
            Are you sure you want to archive this wine?
          </p>
          <button
            type='button'
            className='btn--enforced btn-archive--yes'
            onClick={pickedWine.archived ? handleDelete : handleArchive}>
            yes
          </button>
          <button
            type='button'
            className='flat-button--border btn-archive--no'
            onClick={handleAreYouSure}>
            no
          </button>
        </div>
      ) : null}
    </>
  )
}

export default AreYouSureButtons
