import React from 'react'
import propTypes from 'prop-types'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import firebaseApp from '../firebase/firebaseApp'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {

  const [auth, setAuth] = React.useState(null)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    setAuth(getAuth(firebaseApp))
  }, [])

  React.useEffect(() => {
    if (auth) {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })
    }
  }, [auth])

  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  const logOut = () => signOut(auth)

  const state = React.useMemo(() => ({ auth, user, registerUser, logIn, logOut }), [auth, user, registerUser, logIn, logOut])

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export { UserProvider }
export default UserContext
