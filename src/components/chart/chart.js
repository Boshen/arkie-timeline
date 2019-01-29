import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
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
        新增了 {formatNumber(data.users)} 位用户
        <br />
        真是令人难忘的一天
      </div>
    )
  )
}

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

export const Chart = React.memo(({ page }) => {
  return (
    <ResponsiveContainer height={300}>
      <AreaChart data={chartData}>
        <Tooltip content={renderTooltip} />
        <Area
          type="basis"
          dataKey="acc"
          dot={false}
          stroke="#666"
          fill="#171717"
          animationDuration={4000}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
})
