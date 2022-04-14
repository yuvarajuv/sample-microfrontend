import React, { createContext, useContext, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

export const LanguageContext = createContext()

export const useLanguage = () => {
  return useContext(LanguageContext)
}

export const LanguageProvider = ({ languageCode, children }) => {
  const [locale, setLocale] = useState(languageCode ?? 'en')

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.any,
  languageCode: PropTypes.string,
}
