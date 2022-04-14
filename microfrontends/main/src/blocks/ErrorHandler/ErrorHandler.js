import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withRouter from '@/utils/helpers/withRouter'
import { Flex, Heading, Text, Button } from 'components/Ui'

class ErrorHandler extends Component {
  constructor(props) {
    super(props)
    this.state = { error: false, errorInfo: null, hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
      hasError: true,
    })
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.hasError &&
      prevProps?.location?.pathname &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          width="100%"
          bg="bg.secondary"
          minHeight="100%"
          variant="columnCenter"
        >
          <Heading mb="md">Something went wrong.</Heading>
          <Text mb="lg">{this.state?.error?.name.toString()}</Text>
          <Button
            onClick={() => this.setState({ hasError: false })}
            textTransform="uppercase"
          >
            Try again
          </Button>
        </Flex>
      )
    }
    return this.props.children
  }
}

export const ErrorHandlerWithRouter = withRouter(ErrorHandler)

export default ErrorHandler

ErrorHandler.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

ErrorHandler.defaultProps = {
  children: null,
}
