import * as S from './main.module.css'
import { PhotoCommentsForm } from '../PhotoCommentsForm'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/usercontext'
import { Api } from '../../api/user'

export function PhotoComments({ id, comments }) {
  const { login } = useContext(UserContext)
  const [comment, setComment] = useState(comments)

  async function getComment() {
    const { comments } = await Api.getPhotoById(id)
    setComment(comments)
  }


  return (
    <>{console.log(comment)}
      <ul className={S.comments}>
        {
          comment?.map(comment => {
            return (
              <li key={comment.comment_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
                </li>
            )
          })
        }
      </ul>
      {login && <PhotoCommentsForm id={id} refreshComments={getComment}/>}
    </>
  )
}