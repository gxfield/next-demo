import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import { Text, Link, Button } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import marapoolLogo from '../public/marapool.png'

interface MyProps {
  children: React.ReactChild
}

const LoginRegisterLayout: React.FunctionComponent<MyProps> = (props) => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" h="100vh" gap={6} bg="gray.100">
      <GridItem colSpan={[1, 2, 2, 4]} />
      <GridItem colSpan={[12, 8, 8, 4]}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          h="100vh"
        >
          <Box
            flex="none"
            w="100%"
            maxW="500"
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            padding="10"
            alignItems="center"
            boxShadow="lg"
          >
            <Box textAlign="center">
              <Image src={marapoolLogo} alt="Marapool Logo" layout="intrinsic" loading="eager" />
            </Box>
            {props.children}
            <Box textAlign="right">
              <Link fontSize="xs" color="blue.300">Forgot your password?</Link>
            </Box>
            <Box pt="10">
              <Button colorScheme="blue" w="100%">Sign In</Button>
            </Box>
          </Box>
          <Text fontSize="xs" pt="4">
            Do you have any questions? <Link color="blue.500">Contact Us</Link>
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={[1, 2, 2, 4]} />
    </Grid>
  )
}

export default LoginRegisterLayout
