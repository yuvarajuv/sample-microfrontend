import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  typography,
  compose,
  variant,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import Box from '../Box'
import css from '@styled-system/css'
import { variants as textVariants } from '../Text'

const styleProps = compose(color, space, border, layout, typography)

const InputWrapperVariants = {
  default: {
    py: 'xs',
    height: 'xl',
  },
  big: {
    py: 'sm',
    height: '3rem',
  },
  editable: {
    px: 0,
    height: 'xl',
  },
}

const InputVariants = {
  default: {
    fontWeight: 'extraLight',
    fontSize: 'xs',
    lineHeight: 'sm',
  },
  big: {
    lineHeight: 'sm',
    fontWeight: 'light',
    fontSize: 'sm',
  },
}

const InputWrapper = styled(Box)(
  css({
    borderRadius: 1,
    borderColor: 'border.input',
    px: 'md',
    zIndex: '10',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }),
  variant({
    variants: InputWrapperVariants,
  }),
  ({ hasError }) =>
    hasError &&
    css({
      borderRadius: 1,
      borderColor: 'border.error',
      borderStyle: 'solid',
      borderWidth: '1px',
    }),
  styleProps,
  ({ sx }) => sx,
)

const InputBackgroundVariants = {
  default: {
    borderRadius: 1,
    borderColor: 'border.input',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  big: {
    borderRadius: 1,
    borderColor: 'border.input',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  editable: {
    borderBottom: '1px solid',
    borderColor: 'darkGray',
  },
  borderNone: {
    border: 'none',
  },
}

const InputBackground = styled(Box)(
  {
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: '-1',
  },
  variant({
    variants: InputBackgroundVariants,
  }),
  ({ hasError }) =>
    hasError &&
    css({
      borderColor: 'border.error',
    }),
)

const InputBase = styled.input.attrs({
  fontFamily: '"Metropolis", sans-serif',
  color: 'text.primary',
})(
  {
    flexGrow: 1,
    padding: 0,
    boxSizing: 'border-box',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    width: '100%',
    '::placeholder': {
      color: (props) => props.theme.colors.text.placeholder,
    },
  },
  variant({
    variants: InputVariants,
  }),
  variant({
    prop: 'textVariant',
    variants: textVariants,
  }),
  styleProps,
  ({ sx }) => sx,
)
const Input = ({
  after,
  before,
  type,
  sx,
  inputSx,
  maxWidth,
  variant = 'default',
  ref,
  error,
  ...props
}) => {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }
  useImperativeHandle(ref, () => inputRef.current)
  const hasError = !!error?.message
  return (
    <InputWrapper
      onClick={focusInput}
      variant={variant}
      maxWidth={maxWidth}
      sx={sx}
      hasError={hasError}
    >
      {before}
      <InputBase
        ref={inputRef}
        type={type}
        sx={inputSx}
        variant={variant}
        {...props}
      />
      {after}
      <InputBackground variant={variant} hasError={hasError} />
    </InputWrapper>
  )
}
Input.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.typography,
  as: PropTypes.node,
  sx: PropTypes.object,
  inputSx: PropTypes.object,
  type: PropTypes.string,
  after: PropTypes.any,
  before: PropTypes.any,
  variant: PropTypes.string,
  error: PropTypes.object,
}

export default forwardRef(function InputWrapper(props, ref) {
  return Input({ ref, ...props })
})
