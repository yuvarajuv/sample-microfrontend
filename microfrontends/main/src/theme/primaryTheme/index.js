import palette from './palette'
import breakpoints from './breakpoints'
import radii from './radii'
import elements from './elements'
import shadows from './shadows'
import { fontSizes, fontWeights, lineHeights } from './typography'

export const space = [
  0, // no
  '0.25rem', // xxs
  '0.5rem', // xs
  '0.75rem', // sm
  '1rem', // md
  '1.5rem', // lg
  '2rem', // xl
  '4rem',
  '8rem',
]

space.no = space[0]
space.xxs = space[1]
space.xs = space[2]
space.sm = space[3]
space.md = space[4]
space.lg = space[5]
space.xl = space[6]
space.xxl = space[7]
space.xxxl = space[8]

const primaryTheme = {
  name: 'Light',
  colors: palette,
  breakpoints,
  radii,
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  elements,
  shadows,
  sizes: space,
}

export default primaryTheme
