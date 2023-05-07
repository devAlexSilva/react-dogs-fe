import * as S from './main.module.css'
import { Head } from '../../../components/Head'
import { useEffect, useState } from 'react'
import { Api } from '../../../api/user'
import { Loading } from '../../../components/Loading'
import { Error } from '../../../components/Error'
import { StatisticsGraph } from '../../../components/StatisticsGraph'


export function UserStatistic() {
  const [data, setData] = useState([{}])
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
    <div>
      <Head title='Estatistica' description='estatistica do usuário' />
      <StatisticsGraph data={data}/>
    </div>
  )
}