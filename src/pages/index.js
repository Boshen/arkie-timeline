import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Chart from '../components/chart'
import Image, { astronaut } from '../components/image'

import './index.css'

const IndexPage = () => (
  <>
    <SEO />
    <Chart />
    <div className="timeline-line" />
    <Layout>
      <h1 className='cover-title'>the history of <br /> <span className="large-title">arkie</span></h1>
      <button className='explore-btn'>EXPLORE</button>
    </Layout>

    <Layout>
      <h1 className='event'><div className='event-bullet' />有的</h1>
      <h3 className='time'>2016.07 - 2016.10</h3>
      <h3 className='intro'>有的是 arkie 的前身，当时产品名字还不叫 arkie. 第一版的产品形态非常简单，只有一个编辑器和我的作品，可以创建、编辑和保存海报。后来才逐步加入设计算法，开始自动生成设计。</h3>
      <Image query={astronaut}/>
      <video />
    </Layout>

    <Layout>
      <h1 className='event'><div className='event-bullet' />ARKIE beta</h1>
      <h3 className='time'>2016.10 - 2017.05</h3>
      <h3 className='intro'>产品正式改名为 arkie，并用上了由爱莲亲自设计的 LOGO. 此时 arkie 已经拥有自动生成设计的能力，尽管效果不是很完善。我们第一次尝试春节活动，在微信里利用 H5 制作春节海报，最后效果还不错。</h3>
      <ul className='keypoint'>
        <li>
          <h2 className='keypoint-content'>2周</h2>
          <h3 className='keypoint-title'>活动时间</h3>
        </li>
        <li>
          <h2 className='keypoint-content'>120,000+</h2>
          <h3 className='keypoint-title'>生成海报数</h3>
        </li>
      </ul>
    </Layout>

    <Layout>
      <h1 className='event'><div className='event-bullet' />arkie 1.0</h1>
      <h3 className='time'>2017.05.05</h3>
      <h3 className='intro'>在 ARK DFC 大会上，第一次公开宣布 arkie 这个产品，arkie 1.0 正式发布。此时 arkie 已经可以生成各种不同的设计海报，用途和效果变得丰富多样。arkie 的团队规模也扩大了不少，从 ARK 办公室搬出来拥有了自己的办公室。</h3>
    </Layout>

    <Layout>
      <h1>一路走来 感谢有你</h1>
    </Layout>
  </>
)

export default IndexPage
