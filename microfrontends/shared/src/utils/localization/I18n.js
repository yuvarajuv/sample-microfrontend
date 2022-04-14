import React, { useState, useEffect, Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'

import { useLanguage } from './index'

export const IntlContext = ({ translations, children }) => {
  const { locale } = useLanguage()
  const [messages, setMessages] = useState(null)

  useEffect(async () => {
    setMessages(await translations(locale))
  }, [locale])

  if (!messages) return null

  return (
    <Suspense>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </Suspense>
  )
}

IntlContext.propTypes = {
  children: PropTypes.any,
  translations: PropTypes.func,
}

IntlContext.defaultProps = {
  children: null,
}
