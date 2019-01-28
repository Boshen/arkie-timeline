import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import format from 'format-number'

import data from './chart-data.json'
import style from './chart.module.css'

const formatNumber = format()

const renderTooltip = (props) => {
  const data = props.payload && props.payload && props.payload[0] && props.payload[0].payload
  if (!data) {
    return null
  }
  const date = data.date.split('-')
  return !!data && (
    <div className={style.tooltip}>
      {date[0]}年{date[1]}月{date[2]}日, 我们<br />
      生成了 {formatNumber(data.generated)} 张海报<br />
      保存了 {formatNumber(data.saved)} 张海报
    </div>
  )
}

const Chart = React.memo(() => {
  const width = window.innerWidth / 2.5
  const height = window.innerHeight
  return (
    <div className={style.chart}>
      <LineChart width={width} height={height} data={data} layout={'vertical'}>
        <Tooltip content={renderTooltip} />
        <XAxis hide={true} dataKey='generated' type="number" />
        <YAxis hide={true} dataKey="date" type="category"/>
        <Line type="monotone" dataKey="generated" dot={false} stroke="#8884d8" />
      </LineChart>
    </div>
  )
})

export default Chart
