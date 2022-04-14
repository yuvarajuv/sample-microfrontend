import styled from 'styled-components'
import { Box } from '@/components/ui'
import { variant } from 'styled-system'

const variants = {
  default: {
    bg: 'bg.primary',
    borderRadius: 3,
  },
  popup: {
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.2)',
    bg: 'bg.popup',
  },
  popup2: {
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.25)',
    borderRadius: 1,
    bg: 'bg.primary',
  },
  box: {
    boxShadow: 'box',
    borderRadius: 2,
    bg: 'bg.primary',
  },
}

export const Paper = styled(Box)(
  variant({
    variants,
  }),
)

Paper.propTypes = Box.propTypes

Paper.defaultProps = {
  variant: 'default',
}

export default Paper
