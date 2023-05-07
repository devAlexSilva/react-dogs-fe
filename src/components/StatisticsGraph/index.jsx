import { useEffect, useState } from 'react'
import * as S from './main.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

export function StatisticsGraph({ data }) {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const arrayGraph = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })
    setGraph(arrayGraph)

    const arrayAccess = data.map(item => Number(item.acessos))
    setTotal(arrayAccess.reduce((a, b) => a + b, 0))
  }, [data])

  return (
    <section className={`animeLeft ${S.graph}`}>
      {
        total > 0 ? (
          <>
            <div className={`${S.total} ${S.graphItem}`}>
              <p>acessos {total}</p>
            </div>
            <div className={S.graphItem}>
              <VictoryPie
                data={graph}
                innerRadius={40}
                padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                style={{
                  data: {
                    fillOpacity: .8,
                    stroke: '#fff',
                    strokeWidth: 3
                  },
                  labels: {
                    fontSize: 16,
                    fill: '#333'
                  }
                }}
              />
            </div>
            <div className={S.graphItem}>
              <VictoryChart>
                <VictoryBar data={graph} alignment='start'></VictoryBar>
              </VictoryChart>
            </div>
          </>
        ) : (<p className={S.empty}>Sem dados para mostrar</p>)
      }
    </section>
  )
}