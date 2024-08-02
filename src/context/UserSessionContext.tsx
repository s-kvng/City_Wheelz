import React from 'react'
import { createContext } from 'vm'

export const UserSessionContext = createContext(null)
const UserSessionContextProvider = ({ children }) => {
  return (
    <UserSessionContext.Provider>
        {children}
    </UserSessionContext.Provider>
  )
}

export default UserSessionContext