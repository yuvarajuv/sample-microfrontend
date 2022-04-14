import React from 'react'
import { Paper } from '@/components/ui'
import PasswordInput from './PasswordInput'

const Template = (props) => (
  <Paper p="md">
    <PasswordInput {...props} />
  </Paper>
)

export default {
  title: 'Fields/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
}

export const Primary = Template.bind({})
Primary.args = {}
