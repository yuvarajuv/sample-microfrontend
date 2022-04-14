import styled from 'styled-components'
import css from '@styled-system/css'
import {
  color,
  space,
  border,
  layout,
  compose,
  variant,
  typography,
  flexbox,
  system,
} from 'styled-system'
import PropTypes from 'prop-types'

const textTransform = system({
  textTransform: true,
})

const styleProps = compose(
  color,
  space,
  border,
  layout,
  typography,
  flexbox,
  textTransform,
)

const variants = {
  default: {
    bg: 'accent',
    color: 'link.menuAccent',
  },
  outline: {
    color: 'accent',
    bg: 'transparent',
    border: '1px solid',
    borderColor: 'accent',
  },
  gray: {
    bg: 'lightGray',
    color: 'link.menuAccent',
  },
  grayOutline: {
    bg: 'transparent',
    color: 'darkGray',
    border: '1px solid',
    borderColor: 'border.tableLine',
  },
  transparent: {
    bg: 'transparent',
  },
}

const sizeVariants = {
  sm: {
    fontSize: 'xs',
    lineHeight: 'sm',
    py: '0.375rem',
    px: 'xl',
  },
  md: {
    fontSize: 'md',
    lineHeight: 'sm',
    py: 'xs',
    px: 'lg',
  },
  lg: {
    fontSize: '0.938rem',
    lineHeight: 'sm',
    width: '100%',
    py: 'sm',
    px: 'lg',
  },
}

const Button = styled.button(
  css({
    fontWeight: 'normal',
    borderRadius: 1,
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    letterSpacing: '0.019rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  variant({
    variants,
  }),
  variant({
    prop: 'sizeVariant',
    variants: sizeVariants,
  }),
  styleProps,
  ({ sx }) => sx,
)

Button.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'outline',
    'gray',
    'grayOutline',
    'transparent',
  ]).isRequired,
  sizeVariant: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Button.defaultProps = {
  variant: 'default',
  sizeVariant: 'md',
}
export default Button
