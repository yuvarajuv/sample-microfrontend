import styled from 'styled-components'
import { system, variant } from 'styled-system'
import { Box } from '@/components/ui'

const Row = styled(Box)(
  {
    display: 'flex',
  },
  system({
    gap: {
      property: 'gap',
      scale: 'space',
    },
  }),
  variant({
    prop: 'wrap',
    variants: {
      wrap: {
        flexWrap: 'wrap',
      },
      nowrap: {
        flexWrap: 'nowrap',
      },
    },
  }),
)

Row.propTypes = Box.propTypes

Row.defaultProps = {
  wrap: 'wrap',
}

export default Row
