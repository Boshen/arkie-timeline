import 'modern-normalize/modern-normalize.css'

import React, { useRef } from 'react'

import SEO from '../components/seo'

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
} from '../components/slides/'

import './index.css'

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
        content: '120,000+',
        title: '生成海报数',
      },
    ],
  },
  {
    title: 'arkie 1.0',
    subtitle: '2017.05.05',
    desc: `
      在 ARK DFC 大会上，第一次公开宣布 arkie 这个产品，arkie 1.0
      正式发布。此时 arkie
      已经可以生成各种不同的设计海报，用途和效果变得丰富多样。arkie
      的团队规模也扩大了不少，从 ARK 办公室搬出来拥有了自己的办公室。
      `,
    Slide: Slide3,
    keypoints: [
      {
        content: '6,500+',
        title: '用户',
      },
      {
        content: '20,000+',
        title: '生成海报数',
      },
    ],
  },
  {
    title: '饿了么 / 微信支付',
    subtitle: '2017 下半年',
    desc: `
      arkie 首次尝试企业服务，为企业提供规范设计和自动生成的能力，
      帮助企业从大批量重复劳动的设计中解放。最后由于饿了么被阿里收购 / 微信支付更换负责人，合作没有继续。
      `,
    Slide: Slide4,
    keypoints: [
      {
        content: '120,000+',
        title: '新增用户',
      },
      {
        content: '5,700,000+',
        title: '新生成海报数',
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
        content: '8,000,000+',
        title: '二月生成海报数',
      },
      {
        content: '1,900,000+',
        title: '二月15日',
      },
    ],
  },
  {
    title: '小名片',
    subtitle: '2018.03',
    desc: `
      在姓氏吉言大获成功后，我们想要尝试其他裂变方式，于是做了小名片。用户在
      arkie
      小程序里制作好名片后，通过小程序分享给朋友。还为20多家企业定制名片模板，让企业员工使用
      arkie 小名片。
      `,
    Slide: Slide6,
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
    keypoints: [
      {
        content: '4331',
        title: '用户创建场景数',
      },
      {
        content: '6,000,000+',
        title: '生成海报数',
      },
    ],
  },
  {
    title: 'arkie enterprise',
    subtitle: '2018.10',
    desc: `
      全面转向企业服务，提供咨询+技术的解决方案。深度了解客户，用咨询的方式将
      `,
  },
]

const Page = ({ title, subtitle, desc, keypoints, Slide }) => (
  <div className="container">
    <div>
      <h1 className="event">
        <div className="event-bullet" />
        {title}
      </h1>
      <h3 className="time">{subtitle}</h3>
      <h3 className="intro">{desc}</h3>
      {keypoints && (
        <ul className="keypoint">
          {keypoints.map((k, i) => (
            <li key={i}>
              <h2 className="keypoint-content">{k.content}</h2>
              <h3 className="keypoint-title">{k.title}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
    {Slide && (
      <div className="slide">
        <Slide />
      </div>
    )}
  </div>
)

const IndexPage = () => {
  const scroller = useRef(null)

  const headerPage = (
    <div key="header" className="wrap">
      <div className="timeline-line-mask" />
      <h1 className="cover-title">
        the history of <br /> <span className="large-title">arkie</span>
      </h1>
      <span
        className="explore-btn"
        onClick={() => scroller.current.goToPage(1)}
      >
        EXPLORE
        <span role="img" aria-label="down">
          👇
        </span>
      </span>
    </div>
  )

  const footerPage = (
    <div key="footer" className="wrap">
      <h1>一路走来 感谢有你</h1>
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
      <div className="timeline-line" />
      {pages}
    </main>
  )
}

export default IndexPage
