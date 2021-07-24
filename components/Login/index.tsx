import { useState } from 'react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export default function Login() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <InputGroup mb="2" mt="10">
        <InputLeftElement pointerEvents="none" pt="2">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="Username/Email Address" size="lg" bg="white" />
      </InputGroup>
      <InputGroup size="lg">
        <Input
          placeholder="Enter password"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          bg="white"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  )
}
