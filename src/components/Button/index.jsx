import * as S from './main.module.css'

export function Button({children, ...props}) {
  return (
    <button className={S.button} {...props}>{children}</button>
  )
}