import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from '@/services'

export function PrivateRoute({ children }) {
  let { user } = useAuth()
  let location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
}
