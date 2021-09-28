import HomePage from "./pages"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={HomePage} />
    </Switch>
  )
}

export default App
