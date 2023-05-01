import * as S from './main.module.css'
import { PhotoContent } from '../PhotoContent'
import { useEffect, useState } from 'react'

export function FeedModal({ photoInModal }) {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  function closeModal(e) {
    console.log(e.target.id)
    if(e.target === e.currentTarget || e.target.id === 'closeModal') setModalIsOpen(false)
  }

  useEffect(() => {
    setModalIsOpen(true)
  }, [photoInModal])

  return (
    <>
      { modalIsOpen &&
        <div className={S.modal} onClick={closeModal}>
          {console.log(photoInModal)}
          <span id='closeModal' style={{cursor: 'pointer'}}>X</span>
          <PhotoContent data={photoInModal} />
        </div>
      }
    </>
  )
}