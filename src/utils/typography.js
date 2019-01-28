// https://kyleamathews.github.io/typography.js/
import Typography from "typography"

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.6,
  headerLineHeight: 1.6,
  headerFontFamily: ['Chinese Quote', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica, Arial', 'sans-serif',
 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
  bodyFontFamily: ['Chinese Quote', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica, Arial', 'sans-serif',
 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
  overrideStyles: () => ({
    h1: {
      color: 'white',
      fontSize: '100px',
      fontWeight: 600,
      textTransform: 'uppercase'
    },
    h2: {
      color: 'white',
    },
    h3: {
      color: '#7F7F7F',
      fontWeight: 400,
    },
    h6: {
      color: 'white',
    },
    main: {
      backgroundColor: 'black'
    }
  })
})

export default typography
