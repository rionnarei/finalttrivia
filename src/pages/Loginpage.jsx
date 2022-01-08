import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
  } from '@chakra-ui/react'

  import React, { useState } from 'react'
  import { FaGoogle } from 'react-icons/fa'
  import {useHistory, useLocation } from 'react-router-dom'
  import { Layout } from '../components/Layout'
  import { useAuth } from '../contexts/AuthContext'
  import useMounted from '../hooks/useMounted'
  
  export default function Loginpage() {

    const history = useHistory() // This hook allows user to return to the previous page
    const { signInWithGoogle, login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const location = useLocation()
  

    const mounted = useMounted()
  
    function handleRedirectToOrBack() {
      history.replace(location.state?.from ?? '/')
    }
  
    return (
      <Layout>

        <Heading textAlign='center' my={12}>
          Login
        </Heading>

        

          <chakra.form //Form styling used by Chakra UI
            onSubmit={async e => { //onSubmit event, upon form submission the events inside it begin

               // The login logic is over here

              e.preventDefault()

              if (!email || !password) {
                toast({
                  description: 'Credentials not valid.',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })

                return
              }

              setIsSubmitting(true)
              login(email, password)
                .then(res => {
                  handleRedirectToOrBack()
                })
                .catch(error => {
                  console.log(error.message)
                  toast({
                    description: error.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                })
                .finally(() => {
                  mounted.current && setIsSubmitting(false)
                })
            }}
          > 
            <Stack spacing='6'>
              <FormControl id='email'> 
                <FormLabel>Email address</FormLabel> 
                <Input
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Password</FormLabel>

                <Input
                  name='password'
                  type='password'
                  autoComplete='password'
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </FormControl>

              <Button
                type='submit'
                colorScheme='telegram'
                size='lg'
                fontSize='md'
                isLoading={isSubmitting}
              >
                Sign in
              </Button>
            </Stack>
          </chakra.form>
          <br></br>
          <Button
            variant='outline'
            isFullWidth
            colorScheme='red'
            leftIcon={<FaGoogle />}
            onClick={() =>
              signInWithGoogle()
                .then(user => {
                  handleRedirectToOrBack()
                  console.log(user)
                })
                .catch(e => console.log(e.message))
            }
          >
            Sign in with Google
          </Button>
        
      </Layout>
    )
  }