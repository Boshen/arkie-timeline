import React from 'react'

import Layout from '../components/layout'
import Chart from '../components/chart'
import './index.css'

const IndexPage = () => (
  <>
    <div className="timeline-line" />
    <Chart />
    <Layout>
      <h1 className='cover-title'>the history of <br /> <span className="large-title">arkie</span></h1>
      <button className='explore-btn'>EXPLORE</button>
    </Layout>

    <Layout>
      <h1 className='event'><div className='event-bullet' />有的</h1>
      <h3 className='time'>2016.07 - 2016.10</h3>
      <h3 className='intro'>「有的」是 arkie 的前身，当时产品名字还不叫 arkie. 第一版的产品形态非常简单，只有一个编辑器和我的作品，可以创建、编辑和保存海报。后来逐步加入设计算法，从纯手动做设计往自动生成设计转变。</h3>
      <image />
      <video />
    </Layout>

    <Layout>
      <h1 className='event'>ARKIE beta</h1>
      <h3 className='time'>2016.10 - 2017.05</h3>
      <h3 className='intro'>开始积累设计算法，第一次在春节尝试裂变活动</h3>
      <ul className='keypoint'>
        <li>
          <h6 className='keypoint-title'>开放时间</h6>
          <h2 className='keypoint-content'>2周</h2>
        </li>
        <li>
          <h6>生成海报数</h6>
          <h2>120000+</h2>
        </li>
      </ul>
      <image />
    </Layout>

    <Layout>
      <h1>一路走来 感谢有你</h1>
    </Layout>
  </>
)

export default IndexPage
