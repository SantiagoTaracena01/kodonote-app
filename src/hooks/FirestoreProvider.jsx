import React from 'react'
import propTypes from 'prop-types'
import { getFirestore } from 'firebase/firestore'
import firebaseApp from '../firebase/firebaseApp'

const FirestoreContext = React.createContext()

const FirestoreProvider = ({ children }) => {
  const [app, setApp] = React.useState(null)
  const [db, setDb] = React.useState(null)

  React.useEffect(() => {
    setApp(firebaseApp)
  }, [])

  React.useEffect(() => {
    if (app) setDb(getFirestore(app))
  }, [app])

  const state = React.useMemo(() => ({ app, db }), [app, db])

  return (
    <FirestoreContext.Provider value={state}>
      {children}
    </FirestoreContext.Provider>
  )
}

FirestoreProvider.propTypes = {
  children: propTypes.node.isRequired,
}

export { FirestoreProvider }
export default FirestoreContext
