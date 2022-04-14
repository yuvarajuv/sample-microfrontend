import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider, IntlContext } from 'components/utils/localization'
import { GlobalStyle, primaryTheme } from '@/theme'
import { ErrorHandler } from '@/blocks'

// Utils
import translations from '@/utils/translations'

// Router
import Routes from './Routes'
import { AuthProvider } from '@/services'

export default function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      <ErrorHandler>
        <AuthProvider>
          <LanguageProvider>
            <IntlContext translations={translations}>
              <Routes />
            </IntlContext>
          </LanguageProvider>
        </AuthProvider>
      </ErrorHandler>
    </ThemeProvider>
  )
}
