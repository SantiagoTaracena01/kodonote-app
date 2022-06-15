import React from 'react'
import propTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { UserProvider } from '../hooks/UserProvider'

const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(UserProvider)
  return user ? children : <Navigate to="/" />
}

ProtectedRoute.propTypes = {
  children: propTypes.node.isRequired,
}

export default ProtectedRoute
