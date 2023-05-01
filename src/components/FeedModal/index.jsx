import * as S from './main.module.css'
import { PhotoContent } from '../PhotoContent'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/usercontext'



export function FeedModal({ photoInModal }) {
  const { modalIsOpen, setModalIsOpen } = useContext(UserContext)

  function closeModal(e) {
    if(e.target === e.currentTarget || e.target.id === 'closeModal') setModalIsOpen(false)
  }

  async function deletePhoto() {
    setModalIsOpen()
  }

  useEffect(() => {
    setModalIsOpen(true)
  }, [photoInModal])

  return (
    <>
      { modalIsOpen &&
        <div className={S.modal} onClick={closeModal}>
          <span id='closeModal' style={{cursor: 'pointer'}}>X</span>
          <PhotoContent data={photoInModal} />
        </div>
      }
    </>
  )
}