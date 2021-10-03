import HomePage from "./pages"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/nav-bar"
import ProductsPage from "./pages/products"
import AccountPage from "./pages/account"

function App() {
  return (
    <NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/account" component={AccountPage} />
      </Switch>
    </NavBar>
  )
}

export default App
