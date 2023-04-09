import * as S from './main.module.css'
import { Api } from '../../../api/user'

export function LoginReset() {
  async function handleClick() {
    const data = await Api.getUser()
    console.log(data)
  }
  return (
    <>
      login Reset
      <button onClick={handleClick}>teste</button>
    </>
  )
}