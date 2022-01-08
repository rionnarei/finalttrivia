import {
    Text,
    Heading,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Layout } from '../components/Layout'
  import { useAuth } from '../contexts/AuthContext'
  
  export default function Homepage() {

    const {currentUser} = useAuth()

    return (
      <Layout>
        
        <Heading fontWeight='black'
            fontStyle='italic'
            fontSize='72'
            colorScheme='red'
            mx={0}
            my={8}>

          Welcome To Trivia
          
        </Heading>

        {<Text 
            fontStyle='italic'
            fontSize='24' my={6}>Logged in as: {currentUser?.email}</Text>}
        
      </Layout>
    )
  }