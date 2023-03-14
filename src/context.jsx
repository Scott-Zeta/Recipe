import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then(response => response.json()).then(data => console.log(data)).catch(e => console.log('Error', e))
  }, [])
  //useEffect is like provide an isolated logic environment for the function inside

  return <AppContext.Provider value='testString'>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }