import React, {useContex} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
  return <AppContext.Provider value='testString'>
    {children}
  </AppContext.Provider>
}

export {AppContext,AppProvider}