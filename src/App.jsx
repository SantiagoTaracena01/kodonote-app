import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FirestoreProvider } from './hooks/FirestoreProvider'
import { UserProvider } from './hooks/UserProvider'
import ProtectedRoute from './utils/ProtectedRoute'

const App = () => (
  <UserProvider>
    <FirestoreProvider>
    <Routes>
        <Route
          path="/"
          element={<h1>Hello world!</h1>}
        />
        <Route
          path="/notebooks"
          element={
            <ProtectedRoute>
              <h1>Notebooks</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <h1>Editor</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </FirestoreProvider>
  </UserProvider>
)

export default App
