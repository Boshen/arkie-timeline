import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import format from 'format-number'

import data from './chart-data.json'
import style from './chart.module.css'

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
      </div>
    )
  )
}

const hasWindow = typeof window !== 'undefined'

const Chart = React.memo(() => {
  const width = hasWindow ? window.innerWidth / 2.5 : 0
  const height = hasWindow ? window.innerHeight : 0
  return (
    <div className={style.chart}>
      <AreaChart width={width} height={height} data={data} layout={'vertical'}>
        <Tooltip content={renderTooltip} />
        <XAxis hide={true} dataKey="generated" type="number" />
        <YAxis hide={true} dataKey="date" type="category" />
        <Area type="basis" dataKey="generated" dot={false} stroke="white" />
      </AreaChart>
    </div>
  )
})

export default Chart
