import HomePage from "./pages"
import { Route, Switch } from "react-router-dom"
import NavBar from "./components/nav-bar"

function App() {
  return (
    <NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={HomePage} />
      </Switch>
    </NavBar>
  )
}

export default App
