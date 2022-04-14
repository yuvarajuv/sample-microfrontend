import React from 'react'
import { Box } from '@/components/ui'
import PropTypes from 'prop-types'
import {
  NavLink as DefaultNavLink,
  useResolvedPath,
  useMatch,
} from 'react-router-dom'
import styled from 'styled-components'

import { typography, compose } from 'styled-system'

const styleProps = compose(typography)

const NavLinkBase = ({
  to,
  onClick = (f) => f,
  children,
  activeProps,
  sx,
  ...props
}) => {
  let resolved = useResolvedPath(to)
  let isActive = useMatch({ path: resolved.pathname, end: false })

  if (isActive) {
    if (props.sx && activeProps.sx) {
      activeProps.sx = { ...props.sx, ...activeProps.sx }
    }
    props = { ...props, ...activeProps }
  }

  return (
    <Box to={to} onClick={onClick} as={DefaultNavLink} sx={sx} {...props}>
      {children}
    </Box>
  )
}
NavLinkBase.propTypes = {
  ...Box.propTypes,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  activeProps: PropTypes.object,
}

const NavLink = styled(NavLinkBase)(
  {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  styleProps,
)

export default NavLink
