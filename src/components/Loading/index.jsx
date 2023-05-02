import * as S from './main.module.css'

export function Loading() {
  return(
    <div className={S.wrapper}>
      <div className={S.loading}></div>
    </div>
  )
}