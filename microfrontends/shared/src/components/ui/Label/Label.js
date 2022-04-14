import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, space, border, layout, compose, variant } from 'styled-system'

const styleProps = compose(color, space, border, layout)

const variants = {
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
}

const Label = styled.label(
  {
    cursor: 'pointer',
    boxSizing: 'border-box',
    display: 'flex',
  },
  variant({
    prop: 'wrap',
    variants,
  }),
  styleProps,
  ({ sx }) => sx,
)

Label.propTypes = {
  variant: PropTypes.oneOf(['row', 'column']).isRequired,
}
Label.defaultProps = { variant: 'row' }

export default Label
