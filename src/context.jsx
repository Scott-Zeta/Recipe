import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const all = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const random = 'https://www.themealdb.com/api/json/v1/1/random.php'
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = (url) => {
    setLoading(true)
    axios.get(url).then(response => setMeals(response.data.meals)).catch(e => console.log('Error', e.response))
    setLoading(false)
  }

  useEffect(() => fetchData(all), [])
  //useEffect is like provide an isolated logic environment for the function inside

  return <AppContext.Provider value={{ meals, loading }}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }