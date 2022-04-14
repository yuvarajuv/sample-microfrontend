import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Input, Text } from '@/components/ui'

function PasswordInput(props) {
  const { error } = props
  const errorMessage = error?.message
  return (
    <>
      <Input type="text" {...props} />
      {errorMessage && (
        <Text color="text.error" mt="xs">
          {errorMessage}
        </Text>
      )}
    </>
  )
}

PasswordInput.propTypes = {
  error: PropTypes.object,
}

export default forwardRef(function PasswordInputWrapper(props, ref) {
  return PasswordInput({ ref, ...props })
})
