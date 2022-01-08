import {
    Badge,
    chakra,
    Code,
    Heading,
    List,
    ListItem,
    OrderedList,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Link, useLocation } from 'react-router-dom'
  import { Layout } from '../components/Layout'
  import { useAuth } from '../contexts/AuthContext'
  
  export default function Homepage() {
    return (
      <Layout>
        {/* <Text my={6}>{currentUser?.email}</Text> */}
  
        <Heading fontWeight='black'
            fontStyle='italic'
            fontSize='72'
            colorScheme='red'
            mx={0}
            my={8}>

          Welcome To Trivia
          
        </Heading>
        
      </Layout>
    )
  }