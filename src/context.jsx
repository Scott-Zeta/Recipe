import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const all = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [favorites, setFavorites] = useState(getFavorites())

  const fetchRandom = () => {
    fetchData(randomUrl)
  }

  const fetchData = (url) => {
    setLoading(true)
    axios.get(url).then(response => setMeals(response.data.meals)).catch(e => console.log('Error', e.response))
    setLoading(false)
  }

  useEffect(() => fetchData(`${all}${searchTerm}`), [searchTerm])
  //useEffect is like provide an isolated logic environment for the function inside

  const select = ({ idMeal, favoritesMeal }) => {
    //find the selected one from the set by get the id from selection
    let meal;
    if (favoritesMeal) {
      meal = favorites.find((m) => m.idMeal === idMeal)
    } else {
      meal = meals.find((m) => m.idMeal === idMeal)
    }
    setSelectedMeal(meal)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const addToFavorites = ({ idMeal }) => {
    const alreadyFavorites = favorites.find((m) => m.idMeal === idMeal)
    if (alreadyFavorites) {
      return
    }
    const meal = meals.find((m) => m.idMeal === idMeal)
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  const removeFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((m) => m.idMeal !== idMeal)
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }
  function getFavorites(){
    let favorites = localStorage.getItem('favorites')
    if(favorites){
      favorites=JSON.parse(localStorage.getItem('favorites'))
    }else{
      favorites=[]
    }
    return favorites
  }
  return <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandom, showModal, selectedMeal, select, closeModal, favorites, addToFavorites, removeFavorites }}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }