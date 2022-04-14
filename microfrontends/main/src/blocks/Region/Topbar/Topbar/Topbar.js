import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Logo } from '@/components'
import { MainHeaderContainer } from './Topbar.styled'
import { Box } from '@/components'

export const Topbar = ({ ...props }) => {
  return (
    <MainHeaderContainer {...props}>
      <Box ml="4.5rem">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </Box>
    </MainHeaderContainer>
  )
}

Topbar.propTypes = {
  user: PropTypes.object,
}

Topbar.defaultProps = {
  user: {
    name: '',
  },
}

export default Topbar
