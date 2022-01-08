import React from 'react'
import ApplicationRouter from './components/ApplicationRouter'
import AuthContextProvider from './contexts/AuthContext'

// The whole navigtion of the application is handled by the AppRouter
// this context provider is wrapped inside the router which allows the authentication to work at any page of the applicaiton

function App() {
  return (
    <AuthContextProvider> 
      <ApplicationRouter />
    </AuthContextProvider>
  )
}

export default App;
