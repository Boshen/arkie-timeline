import 'modern-normalize/modern-normalize.css'

import React from 'react'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import Tada from 'react-reveal/Tada'
import youd_video from '../images/1/youd_video.mp4'

import SEO from '../components/seo'
import { Chart } from '../components/chart'

import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
} from '../components/slides/'

import './index.css'
import style from './index.module.css'

const data = [
  {
    title: '有的',
    subtitle: '2016.07 - 10',
    desc: `
      有的是 arkie 的前身，当时产品名字还不叫 arkie.
      第一版的产品形态非常简单，只有一个编辑器和我的作品，
      可以创建、编辑和保存海报。后来才逐步加入设计算法，开始自动生成设计。
      `,
    Slide: Slide1,
    video: youd_video,
  },
  {
    title: 'arkie beta',
    subtitle: '2016.10 - 2017.05',
    desc: `
      产品正式改名为 arkie，并用上了由爱莲亲自设计的 LOGO. 此时 arkie
      已经拥有自动生成设计的能力，尽管不是很完善。我们第一次尝试春节活动，在微信里利用
      H5 制作春节海报，活动效果还不错。
      `,
    Slide: Slide2,
    keypoints: [
      {
        content: '2周',
        title: '活动时间',
      },
      {
        content: '120,000',
        title: '生成海报数',
      },
    ],
  },
  {
    title: 'arkie 1.0',
    subtitle: '2017.04.19',
    desc: `
      在 ARK DFC 大会上，第一次公开宣布 arkie 这个产品，arkie 1.0
      正式发布。此时 arkie
      已经可以生成各种不同的设计海报，用途和效果变得丰富多样。
      `,
    Slide: Slide3,
    keypoints: [
      {
        content: '6,500',
        title: '用户数',
      },
    ],
  },
  {
    title: '探索\n企业服务',
    subtitle: '2017 下半年',
    desc: `
      arkie 首次尝试企业服务，与饿了么 / 微信支付合作。为企业提供规范设计和自动生成的能力，
      帮助企业从大批量重复劳动的设计中解放。arkie
      的团队规模也扩大了不少，从 ARK 办公室搬出来拥有了自己的办公室。
      `,
    Slide: Slide4,
    keypoints: [
      {
        content: '💰',
        title: '首次收入',
      },
    ],
  },
  {
    title: '姓氏吉言',
    subtitle: '2018 春节',
    desc: `
      第二次尝试春节活动，也是 arkie 小程序首次亮相。
      姓氏吉言是个偶然的想法，决定要做之后，团队加班开发小程序、加班制作海报模板，
      最后大家努力的成果最后获得非常好的效果。用户量和生成海报数都得到爆发性增长。
      `,
    Slide: Slide5,
    keypoints: [
      {
        content: '1,900,000',
        title: '单日最高记录二月15日',
      },
      {
        content: '8,000,000',
        title: '二月生成海报数',
      },
    ],
  },
  {
    title: '小名片',
    subtitle: '2018.03',
    desc: `
      在姓氏吉言大获成功后，我们想要尝试其他裂变方式，于是做了小名片。用户在
      arkie
      小程序里制作好名片后，通过小程序分享给朋友。还为多家企业定制名片模板，让企业员工使用
      arkie 小名片。
      `,
    Slide: Slide6,
    keypoints: [
      {
        content: '20家',
        title: '企业名片',
      },
    ],
  },
  {
    title: '搜索新场景',
    subtitle: '2018.03 - 07',
    desc: `
      继续探索更多新场景，希望获得再次的增长。
      比如做了作图卖货场景，将卖的商品做成海报，还能追踪别人查看的信息；
      比如做了愚人节、母亲节贺卡，在节日时间制作海报送人祝福。
      `,
    Slide: Slide7,
    keypoints: [
      {
        content: '45个',
        title: '新场景',
      },
    ],
  },
  {
    title: 'arkie 2.0',
    subtitle: '2018.05.05',
    desc: `
      第二届 DFC 大会，同时也是发布 arkie 2.0 的时间点。
      相比1.0版本，arkie
      增加了基于场景的设计方式，用户可以方便地选取一个场景，快速做出符合使用场景的设计海报。
      还公布了中文名称「作图」以及全新的品牌 LOGO.
      `,
    Slide: Slide8,
  },
  {
    title: '红鼻子',
    subtitle: '2018.04 - 06',
    desc: `
      arkie 和暴走漫画达成合作，为每年一次的红鼻子公益活动，制作裂变小程序，并从中展示
      arkie 的设计能力。但合作途中暴漫因为烈士问题被封，最后合作无法继续。
      `,
    Slide: Slide9,
  },
  {
    title: 'sass 日签',
    subtitle: '2018.07',
    desc: `
      吴晓波日签是第一个日签场景，之后将日签拓展为标准化的 Saas
      服务。用户可以用 arkie 制作属于自己的日签小程序，给自己的粉丝每日打卡，增进互动。
      除了吴晓波，早期还有许多有名的合作客户，包括言几又、樊登、上海时装周、衣二三等等。
      `,
    Slide: Slide10,
    keypoints: [
      {
        content: '4331',
        title: '用户创建场景数',
      },
      {
        content: '6,000,000',
        title: '生成海报数',
      },
    ],
  },
  {
    title: 'arkie enterprise',
    subtitle: '2018.10',
    desc: `
      全面转向企业服务，提供咨询+技术的全面解决方案。基于深度了解客户，提供定制化的产品咨询服务，并给予技术集成/开发支持。
      `,
    Slide: Slide11,
  },
]

const Page = ({ title, subtitle, desc, keypoints, Slide, video }) => (
  <div className={style.container}>
    <div>
      <h1 className={style.title}>
        <div className={style.titleBullet} />
        <Fade left>{title}</Fade>
      </h1>
      <Fade left delay={500}>
        <h3 className={style.subtitle}>{subtitle}</h3>
      </Fade>
      <Fade left delay={1000}>
        <h3 className={style.desc}>{desc}</h3>
      </Fade>
      {keypoints && (
        <Fade left delay={1500}>
          <ul className={style.keypoint}>
            {keypoints.map((k, i) => (
              <li key={i}>
                <h2 className={style.keypointContent}>{k.content}</h2>
                <h3 className={style.keypointTitle}>{k.title}</h3>
              </li>
            ))}
          </ul>
        </Fade>
      )}
      {video && (
        <Fade left delay={2000}>
          <video src={video} controls="controls" width={300} height={300} />
        </Fade>
      )}
    </div>
    {Slide && (
      <Bounce delay={2500}>
        <div className={style.slide}>
          <Slide />
        </div>
      </Bounce>
    )}
  </div>
)

const IndexPage = () => {
  const headerPage = (
    <div key="header" className={style.wrap}>
      <div className={style.timelineMask} />
      <Tada>
        <h1 className={style.coverTitle}>
          the history of <br /> <span className={style.largeTitle}>arkie</span>
        </h1>
      </Tada>
      <Chart />
      <span className={style.exploreButton}>
        EXPLORE
        <span role="img" aria-label="down">
          👇
        </span>
      </span>
    </div>
  )

  const footerPage = (
    <div key="footer" className={style.wrap}>
      <Fade>
        <h1>一路走来 感谢有你</h1>
        <h3 className={style.intro}>
          爱莲 威撸 Leaf 麦子 Ava 李毅 小洪 口袋 Agnes 俊儒 怀奇 Eliot 阿国 阿菜
          家辉 沈毅 Jenny.Du 二豆 华芳 EB 宣宣 Allen 承宇 少将 小清 博深 dio Aoi
          阿糊 11 郑叶 佳文 shadow 雷蕊 小麦 York 智豪 小雨 九九 姝雅 Eleven
          Luna 叶辰 gordomium
        </h3>
        <input
          className={style.nameInput}
          type="text"
          name="firstname"
          aria-label="name"
          title="name"
          placeholder="留下你的名字，一起建设 ARKIE"
        />
      </Fade>
    </div>
  )

  const pages = [
    headerPage,
    ...data.map((d, i) => <Page key={i} {...d} />),
    footerPage,
  ]

  return (
    <main>
      <SEO />
      <div className={style.timeline} />
      {pages}
    </main>
  )
}

export default IndexPage
