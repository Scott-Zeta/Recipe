import React, {useContex} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
  return <Appcontext.Provider value='testString'>
    {children}
  </Appcontext.Provider>
}

export {AppContext,AppProvider}