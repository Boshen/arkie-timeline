// https://kyleamathews.github.io/typography.js/
import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  overrideStyles: () => ({
    h1: {
      color: 'white',
      textTransform: 'uppercase'
    },
    h3: {
      color: 'darkgray',
      textTransform: 'uppercase'
    },
    main: {
      backgroundColor: 'black'
    }
  })
})

export default typography
