import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  compose,
  typography,
} from 'styled-system'
import PropTypes from 'prop-types'

const styleProps = compose(color, space, border, layout, typography)

const Link = styled.a(
  {
    boxSizing: 'border-box',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  styleProps,
  ({ sx }) => sx,
)

Link.propTypes = {
  variant: PropTypes.oneOf(['default']).isRequired,
}

Link.defaultProps = {
  variant: 'default',
}

export default Link
