import React from 'react'

import Layout from '../components/layout'
import './index.css'

const IndexPage = () => (
  <>
    <Layout>
      <h1>the history of <br /> arkie</h1>
      <h3>2016.05 - now</h3>
      <button>explore</button>
    </Layout>

    <Layout>
      <h1 className='event'>有的</h1>
      <h3 className='time'>2016.07 - 2016.10</h3>
      <h3 className='intro'>有的是 arkie 的前身</h3>
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
