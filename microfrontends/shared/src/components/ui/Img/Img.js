import styled from 'styled-components'
import {
  space,
  border,
  layout,
  position,
  compose,
  variant,
} from 'styled-system'

const variants = {
  default: {
    maxWidth: '100%',
    objectFit: 'contain',
  },
}

const styleProps = compose(space, border, layout, position)

const Img = styled.img(
  styleProps,
  variant({
    variants,
  }),
  ({ sx }) => sx,
)
Img.defaultProps = {
  variant: 'default',
}

export default Img
