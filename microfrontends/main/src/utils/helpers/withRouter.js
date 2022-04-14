import React from 'react'
import { useLocation } from 'react-router-dom'

const withRouter = (WrappedComponent) =>
  function withRouterHelper(props) {
    const location = useLocation()
    return <WrappedComponent {...props} location={location} />
  }
export default withRouter
