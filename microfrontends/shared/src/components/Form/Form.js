import React from 'react'
import PropTypes from 'prop-types'
import FormContext from './Context'

export default function Form({
  register = () => {},
  errors = {},
  setValue,
  children,
}) {
  const formContext = {
    register,
    errors,
    setValue,
  }

  return (
    <FormContext.Provider value={formContext}>{children}</FormContext.Provider>
  )
}

Form.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  children: PropTypes.node,
  setValue: PropTypes.func,
}
