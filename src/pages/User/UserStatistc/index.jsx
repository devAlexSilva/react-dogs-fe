import * as S from './main.module.css'
import { Head } from '../../../components/Head'
import { useEffect, useState, lazy, Suspense } from 'react'
import { Api } from '../../../api/user'
import { Loading } from '../../../components/Loading'
import { Error } from '../../../components/Error'
const StatisticsGraph = lazy(() => import('../../../components/StatisticsGraph'))


export function UserStatistic() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      setError(null)
      setLoading(true)

      const data = await Api.getStatistic()
      console.log(data)
      setData(data)

    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (error) return <Error error={error} />
  else if (loading) return <Loading />
  else return (
    <>
      {data &&
        <Suspense fallback={<></>}>
          <Head title='Estatistica' description='estatistica do usuário' />
          <StatisticsGraph data={data}/>
        </Suspense>
      }
    </>
  )
}