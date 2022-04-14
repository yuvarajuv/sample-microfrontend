import React from 'react'
import { Input, Box, Paper, Heading, Button, Label } from 'components/Ui'
import { PasswordInput } from 'components/Fields'
import { useAuth } from '@/services'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { FormattedMessage as I18nMsg, useIntl } from 'react-intl'
import { DASHBOARD_PATH } from '@/utils/RoutePaths'

export default function Login() {
  let { user, login } = useAuth()
  const { formatMessage } = useIntl()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    login(data)
  }

  if (user) {
    return <Navigate to={DASHBOARD_PATH} replace />
  }

  return (
    <Paper
      variant="popup2"
      mx="md"
      width="30rem"
      maxWidth="100%"
      px={['1.5rem', '2.25rem']}
      pt={['1.5rem', '3rem']}
      pb={['2rem', '5rem']}
      maxHeight="100%"
      overflow="auto"
    >
      <Heading uppercase={1} textAlign="center" variant="h2" mb="lg">
        <I18nMsg id="login" />
      </Heading>
      <Box as="form" mb="md" onSubmit={handleSubmit(onSubmit)}>
        <Label wrap="column" mb="md">
          <Input
            variant="big"
            {...register('name', { required: true })}
            placeholder={formatMessage({
              id: 'user_name',
            })}
            autoComplete="off"
          />
        </Label>
        <Label wrap="column" mb="1.75rem">
          <PasswordInput
            variant="big"
            placeholder={formatMessage({
              id: 'password',
            })}
            {...register('password', { required: true })}
            autoComplete="off"
          />
        </Label>
        <Button
          textTransform="uppercase"
          type="submit"
          sizeVariant="lg"
          width="100%"
        >
          <I18nMsg id="login" />
        </Button>
      </Box>
    </Paper>
  )
}
