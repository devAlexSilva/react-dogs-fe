import { FeedModal } from '../FeedModal'
import { FeedPhotos } from '../FeedPhotos'
import { useEffect, useState } from 'react'
import * as S from './main.module.css'


export function Feed({ user }) {
  const [photoInModal, setPhotoInModal] = useState(null)
  const [pages, setPages] = useState([1])
  const [firedInfinityScrollEvent, setFiredInfinityScrollEvent] = useState(true)



  useEffect(() => {
    let shouldWait = false

    function infinityScroll(e) {
      if (firedInfinityScrollEvent) {
        let scrollPosition = window.scrollY
        let screenHeight = window.document.body.offsetHeight - innerHeight

        if ((scrollPosition > screenHeight * .75) && shouldWait === false) {
          setPages([...pages, pages.length + 1])
          console.log('evento de scroll infinito')

          shouldWait = true
          setTimeout(() => shouldWait = false, 500)
        }
      }

    }

    window.addEventListener('wheel', infinityScroll)
    window.addEventListener('scroll', infinityScroll)


    return () => {
      window.removeEventListener('wheel', infinityScroll)
      window.removeEventListener('scroll', infinityScroll)
    }
  }, [pages, firedInfinityScrollEvent])

  return (
    <>
      {photoInModal && <FeedModal photoInModal={photoInModal} />}
      {
        pages.map(page => <FeedPhotos
          key={page}
          user={user}
          page={page}
          setPhotoInModal={setPhotoInModal}
          setFiredInfinityScrollEvent={setFiredInfinityScrollEvent}
        />)
      }

    </>
  )
}