import HomePage from "./pages"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/nav-bar"
import ProductsPage from "./pages/products"
import AccountPage from "./pages/account"
import { auth } from './firebase/firebase.utils'
import React, { useEffect, useState } from "react"

function App() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const authen = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(user)
    })
    return () => authen
  }, [])

  return (
    <NavBar currentUser={currentUser}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/account" component={AccountPage} />
      </Switch>
    </NavBar>
  )
}

export default App
