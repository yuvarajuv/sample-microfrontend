import React, { Suspense } from 'react'
import { Topbar, ErrorHandlerWithRouter } from '@/blocks'
import { MainLayoutContainer } from './MainLayout.styled'
import PropTypes from 'prop-types'

const MainLayout = ({ location, children }) => {
  return (
    <>
      <Topbar />
      <MainLayoutContainer>
        <ErrorHandlerWithRouter location={location}>
          <Suspense fallback={'loading...'}>{children}</Suspense>
        </ErrorHandlerWithRouter>
      </MainLayoutContainer>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.string,
}

MainLayout.defaultProps = {
  children: null,
}

export default MainLayout
