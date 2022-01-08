import {
    Box,
    HStack,
    IconButton,
    Spacer,
    useColorMode,
    useColorModeValue,
  } from '@chakra-ui/react'
  import React from 'react'
  import { useAuth } from '../contexts/AuthContext'
  import Navlink from './Navlink'
  
  export function Navbar() {
    const { toggleColorMode } = useColorMode()
    const { logout, currentUser } = useAuth()
  
    return (

      <Box
        borderBottom='2px'
        borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
        mb={4}
        py={4}
      >

        <HStack
          justifyContent='flex-end'
          maxW='container.lg'
          mx='auto'
          spacing={4}
        >

          <Navlink to='/' name='Trivia' size='lg' />

          <Spacer /> 
          {!currentUser && <Navlink to='/login' name='Login' />}
          {!currentUser && <Navlink to='/register' name='Register' />}
          {currentUser && <Navlink to='/createquiz' name='Create Questions' />}
          {currentUser && <Navlink to='/takequiz' name='Take Quiz' />}

          {currentUser && (
            <Navlink
              to='/logout'
              name='Logout'
              onClick={async e => {
                e.preventDefault()
                await logout()
              }} // if the current user is null then only login and register page shows up. If the user is logged in then the other pages show up. 
            />

            
          )}

        </HStack>
      </Box>
    )
  }