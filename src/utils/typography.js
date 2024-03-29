// https://kyleamathews.github.io/typography.js/
import Typography from 'typography'

const fontFamily = [
  'Chinese Quote',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'PingFang SC',
  'Hiragino Sans GB',
  'Microsoft YaHei',
  'Helvetica Neue',
  'Helvetica, Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.6,
  headerLineHeight: 1.6,
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
  overrideStyles: () => ({
    h1: {
      color: 'white',
      fontSize: '6em',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h2: {
      color: '#b3b3b3'
    },
    h3: {
      color: '#b3b3b3'
    }
  }),
})

export default typography
