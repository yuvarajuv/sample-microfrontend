import styled from 'styled-components'
import { Box } from '@/components'

export const MainHeaderContainer = styled(Box).attrs({ as: 'header' })`
  height: ${(props) => props.theme.elements.header.height};
  background: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 160;
`
export const MainHeaderNav = styled(Box)`
  display: flex;
  height: 100%;
`
