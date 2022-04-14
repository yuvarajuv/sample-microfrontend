import styled from 'styled-components'
import { Box } from '@/components'

export const MainLayoutContainer = styled(Box)`
  padding: 1rem;
  margin-left: 3.5rem;
  margin-top: 3.5rem;
  height: calc(100vh - ${(props) => props.theme.elements.header.height});
  overflow: hidden;
  display: flex;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  overflow: hidden;
`
