import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Box,
  Link,
  Text
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../store/authSlice'
import { useLoginMutation } from '../../services/auth'
import type { LoginRequest } from '../../services/auth'

export default function Login() {
  // setup redux dispatch
  const dispatch = useDispatch()

  // setup redirect method
  const { push } = useRouter()

  // local state to show password
  const [show, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!show)

  // local state to hold the form values
  const [formState, setFormState] = useState<LoginRequest>({
    username: '',
    password: ''
  })
  // update form state
  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  // login is the actual login mutation method
  // isLoading and error are returned as "state"
  const [login, { isLoading, error }] = useLoginMutation()

  const attemptLogin = async () => {
    try {
      const user = await login(formState).unwrap()
      localStorage.setItem('user_data', JSON.stringify(user))
      dispatch(setCredentials(user))
      push('/')
    } catch (err) {
      console.error('login failed', err)
    }
  }

  return (
    <>
      <InputGroup mb="2" mt="10">
        <InputLeftElement pointerEvents="none" pt="2">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Username/Email Address"
          size="lg"
          bg="white"
          name="username"
          type="text"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup size="lg">
        <Input
          placeholder="Enter password"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          bg="white"
          name="password"
          onChange={handleChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box textAlign="right">
        <Link fontSize="xs" color="blue.300">
          Forgot your password?
        </Link>
      </Box>
      <Box pt="10">
        <Button colorScheme="blue" w="100%" onClick={attemptLogin}>
          {isLoading ? 'Loading...' : 'Sign In'}
        </Button>
      </Box>
      {error && (<Box pt="6" textAlign="center">
        <Text color="red">Login failed. 4 attempts remaining.</Text>
      </Box>)}
    </>
  )
}
