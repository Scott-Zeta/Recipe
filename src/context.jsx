import React, { useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const all = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const random = 'https://www.themealdb.com/api/json/v1/1/random.php'

  const fetchData = (url) => {
    axios.get(url).then(response => console.log(response)).catch(e => console.log('Error', e))
  }

  useEffect(() => fetchData(all), [])
  //useEffect is like provide an isolated logic environment for the function inside

  return <AppContext.Provider value='testString'>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }