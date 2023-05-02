import * as S from './main.module.css'
import { Feed } from '../../../components/Feed'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'


export function UserFeed() {
  const { dataUser } = useContext(UserContext)
  
  return (
    <>
       <Feed user={dataUser?.id} />
    </>
  )
}