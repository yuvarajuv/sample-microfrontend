import styled from 'styled-components'
import css from '@styled-system/css'
import { variant } from 'styled-system'
import PropTypes from 'prop-types'

import {
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  compose,
} from 'styled-system'

const styleProps = compose(
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
)

const colVariants = {
  auto: {
    width: 'auto',
  },
  full: {
    flexGrow: '1',
  },
  1: {
    width: '8.3333%',
  },
  2: {
    width: '16.6666%',
  },
  3: {
    width: '25%',
  },
  4: {
    width: '33.3333%',
  },
  5: {
    width: '41.66666667%',
  },
  6: {
    width: '50%',
  },
  7: {
    width: '58.3333%',
  },
  8: {
    width: '66.6666%',
  },
  9: {
    width: '75%',
  },
  10: {
    width: '83.3333%',
  },
  11: {
    width: '91.6666%',
  },
  12: {
    width: '100%',
  },
}

const Col = styled.div(
  css({
    boxSizing: 'border-box',
  }),
  variant({
    prop: 'col',
    variants: colVariants,
  }),
  styleProps,
)

Col.propTypes = {
  col: PropTypes.oneOf([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    'full',
    'auto',
  ]).isRequired,
}

Col.defaultProps = {
  col: 'auto',
}

export default Col
