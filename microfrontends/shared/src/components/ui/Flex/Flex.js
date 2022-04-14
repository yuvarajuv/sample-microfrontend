import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box } from '@/components/ui'

const variants = {
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}

const Flex = styled(Box)(
  {
    display: 'flex',
  },
  variant({
    variants,
  }),
)

export default Flex
