import * as S from './main.module.css'
import { Feed } from '../../../components/Feed'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'
import { Head } from '../../../components/Head'


export function UserFeed() {
  const { dataUser } = useContext(UserContext)
  
  return (
    <>
    <Head title='Meu Feed' description='Feed do usuário logado'/>
       <Feed user={dataUser?.id} />
    </>
  )
}