import React from 'react'
import { Box, Spinner } from '@/components/ui'
import styled from 'styled-components'
import css from '@styled-system/css'

const LoaderSpinnerWrapper = styled(Box)(
  css({
    height: '100%',
    width: '100%',
    bg: 'bg.loaderSpinnerWrapper',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    svg: {
      margin: 0,
    },
  }),
)

export default function LoaderSpinner() {
  return (
    <LoaderSpinnerWrapper>
      <Spinner />
    </LoaderSpinnerWrapper>
  )
}
