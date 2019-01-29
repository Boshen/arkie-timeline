import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import format from 'format-number'

import data from './chart-data.json'
import style from './chart.module.css'

const scan = (arr, reducer, seed) => {
  return arr.reduce(
    ([acc, result], value, index) => {
      acc = reducer(acc, value, index)
      result.push(acc)
      return [acc, result]
    },
    [seed, []]
  )[1]
}

const formatNumber = format()

const renderTooltip = props => {
  const data =
    props.payload &&
    props.payload &&
    props.payload[0] &&
    props.payload[0].payload
  if (!data) {
    return null
  }
  const date = data.date.split('-')
  return (
    !!data && (
      <div className={style.tooltip}>
        {date[0]}年{date[1]}月{date[2]}日, 我们
        <br />
        生成了 {formatNumber(data.generated)} 张海报
        <br />
        保存了 {formatNumber(data.saved)} 张海报
        <br />
        新增了 {formatNumber(data.users)} 用户
      </div>
    )
  )
}

const hasWindow = typeof window !== 'undefined'

const chartData = scan(
  data,
  (a, b) => ({
    ...b,
    acc: a.acc + b.generated,
  }),
  {
    acc: 0,
  }
)

const Chart = React.memo(() => {
  const width = hasWindow ? window.innerWidth / 2.5 : 0
  const height = hasWindow ? window.innerHeight : 0
  return (
    <div className={style.chart}>
      <AreaChart
        width={width}
        height={height}
        data={chartData}
        layout={'vertical'}
      >
        <Tooltip content={renderTooltip} />
        <XAxis hide={true} dataKey="acc" type="number" />
        <YAxis hide={true} dataKey="date" type="category" />
        <Area type="basis" dataKey="acc" dot={false} stroke="white" />
      </AreaChart>
    </div>
  )
})

export default Chart
