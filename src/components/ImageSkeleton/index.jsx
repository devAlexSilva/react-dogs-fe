import { useEffect, useState } from 'react'
import * as S from './main.module.css'

export function ImageSkeleton(props) {
  const [skeleton, setSkeleton] = useState(true)

  function loadSkeleton({ target }) {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <div className={S.wrapper}>
      {skeleton && <div className={S.skeleton}></div>}
      <img onLoad={loadSkeleton} {...props} className={S.img} />
    </div>
  )
}