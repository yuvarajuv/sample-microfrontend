import { useContext } from 'react'
import FormContext from './Context'

export default function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext is not exist')
  }
  return context
}
