import React from 'react'
import styled from 'styled-components'
import {
  space,
  color,
  typography,
  shadow,
  layout,
  variant,
  compose,
  system,
} from 'styled-system'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

const headingVariantBase = {
  color: 'text.primary',
  fontWeight: 'normal',
  lineHeight: 'lg',
}

const variants = {
  h1: {
    ...headingVariantBase,
    fontSize: 'lg',
    lineHeight: 'lg',
    fontWeight: 'bold',
    color: 'text.primary',
  },
  h2: {
    ...headingVariantBase,
    fontSize: 'md',
    fontWeight: 'normal',
    lineHeight: 'lg',
    color: 'text.primary',
  },
  h3: {
    ...headingVariantBase,
    fontSize: 'xxs',
    fontWeight: 'normal',
    lineHeight: 'sm',
    color: 'text.primary',
  },
  h4: {
    ...headingVariantBase,
    fontSize: 'md',
    fontWeight: 'normal',
  },
  h5: {
    ...headingVariantBase,
    fontSize: 'sm',
  },
  h6: {
    color: 'text.primary',
    fontSize: 'xs',
    fontWeight: 'bold',
    lineHeight: 'sm',
  },
}

const style = system({
  textTransform: true,
  cursor: true,
})

const HeadingBase = ({
  variant,
  as: Component = variant,
  sx,
  // eslint-disable-next-line no-unused-vars
  textAlign,
  // eslint-disable-next-line no-unused-vars
  textTransform,
  ...props
}) => <Component variant={variant} sx={sx} {...props} />

const StyleHeading = compose(space, color, typography, shadow, layout, style)

const Heading = styled(HeadingBase)(
  (props) => ({
    padding: 0,
    margin: 0,
    textTransform: props.uppercase ? 'uppercase' : 'inherit',
  }),
  variant({
    variants,
  }),
  StyleHeading,
  ({ sx }) => sx,
)

HeadingBase.propTypes = {
  ...propTypes.space,
  as: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  sx: PropTypes.object,
  children: PropTypes.node,
  uppercase: PropTypes.any,
}

Heading.defaultProps = {
  variant: 'h2',
}

export default Heading
