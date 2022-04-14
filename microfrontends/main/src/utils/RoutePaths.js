import React from 'react'
import { FormattedMessage as I18nMsg } from 'react-intl'
export const DASHBOARD_PATH = '/dashboard'

export const PRIVATE_ROOT_PAGES = [
  {
    label: <I18nMsg id={'sidebar.dashboard'} />,
    path: DASHBOARD_PATH,
  },
]
