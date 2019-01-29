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
  const date = new Date(data.date)
  return (
    !!data && (
      <div className={style.tooltip}>
        {date.getFullYear()}年{date.getMonth() + 1}月{date.getDate()}日, 我们
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

const pageToDate = {
  '1': null,
  '2': null,
  '3': '2017-05-01',
  '4': '2017-05-05',
  '5': '2017-12-31',
  '6': '2018-3-1',
  '7': '2018-4-1',
  '8': '2018-5-1',
  '9': '2018-6-1',
  '10': '2018-7-1',
  '11': '2018-8-1',
  '12': '2019-1-24',
}

const Chart = React.memo(({ page }) => {
  const width = hasWindow ? window.innerWidth / 2.5 : 0
  const height = hasWindow ? window.innerHeight : 0
  return (
    <div className={style.chart}>
      <AreaChart
        width={width}
        height={height}
        data={chartData}
        layout="vertical"
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
