import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  compose,
  system,
} from 'styled-system'

const cursor = system({
  cursor: true,
})

const styleProps = compose(
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  cursor,
)

const Box = styled.div(
  {
    boxSizing: 'border-box',
  },
  styleProps,
  ({ sx }) => sx,
)

export default Box
