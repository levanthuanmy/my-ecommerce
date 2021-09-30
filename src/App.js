import HomePage from "./pages"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/nav-bar"
import ProductsPage from "./pages/products"

function App() {
  return (
    <NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
      </Switch>
    </NavBar>
  )
}

export default App
