import styled from 'styled-components'
import {
  color,
  space,
  typography,
  shadow,
  layout,
  compose,
  variant,
  system,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'

const style = system({
  textTransform: true,
  cursor: true,
})

const styleText = compose(color, space, typography, layout, shadow, style)

export const variants = {
  description: {
    color: 'text.description',
    lineHeight: 'sm',
    fontWeight: 'light',
    fontSize: 'xs',
  },
  descriptionlight: {
    color: 'text.description',
    lineHeight: 'sm',
    fontWeight: 'normal',
    fontSize: 'xxs',
  },
  tableHead: {
    color: 'text.description',
    lineHeight: 'sm',
    fontWeight: 'normal',
    fontSize: 'xxs',
    textTransform: 'uppercase',
  },
  bodyRegular: {
    color: 'text.primary',
    fontWeight: 'light',
    fontSize: 'md',
    lineHeight: 'md',
    letterSpacing: '0.009rem',
  },
  body1SemiBold: {
    color: 'text.primary',
    lineHeight: 'sm',
    fontWeight: 'bold',
    fontSize: 'sm',
  },
  body1Medium: {
    color: 'text.primary',
    lineHeight: 'sm',
    fontWeight: 'normal',
    fontSize: 'sm',
  },
  body1Regular: {
    color: 'text.primary',
    lineHeight: 'sm',
    fontWeight: 'light',
    fontSize: 'sm',
  },
  body2Medium: {
    color: 'text.primary',
    lineHeight: 'sm',
    fontWeight: 'normal',
    fontSize: 'xs',
  },
  body2Regular: {
    color: 'text.primary',
    lineHeight: 'sm',
    fontWeight: 'light',
    fontSize: 'xs',
  },
  body2Light: {
    color: 'text.primary',
    lineHeight: 'sm',
    fontWeight: 'extraLight',
    fontSize: 'xs',
  },
  caption: {
    color: 'text.primary',
    lineHeight: 'sm',
    fontWeight: 'normal',
    fontSize: 'xxs',
  },
  button: {
    color: 'text.primary',
    lineHeight: 'md',
    fontWeight: 'normal',
    fontSize: 'md',
  },
}

const variantsSelect = {
  default: {},
  active: {
    textDecoration: 'underline',
    color: 'text.activeText',
  },
}

const Text = styled.p(
  {
    padding: 0,
    margin: 0,
  },
  variant({
    variants,
  }),
  variant({
    variants: variantsSelect,
    prop: 'active',
  }),
  styleText,
  ({ sx }) => sx,
)

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.shadow,
  ...propTypes.layout,
  as: PropTypes.node,
  sx: PropTypes.object,
  variant: PropTypes.oneOf([
    'description',
    'descriptionlight',
    'tableHead',
    'bodyRegular',
    'body1SemiBold',
    'body1Medium',
    'body1Regular',
    'body2Medium',
    'body2Regular',
    'body2Light',
    'caption',
    'button',
  ]),
}

Text.defaultProps = {
  variant: 'body2Regular',
}

export default Text
