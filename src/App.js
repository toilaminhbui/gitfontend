import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>The project will be updated soon</h1>
                  <a href="https://www.facebook.com/Van.Minh.Nekk">
                    Bùi Văn Minh
                  </a>
                </header>
              </div>
            )
          }}
        />
        <Route
          path="/test"
          component={() => {
            return <h1>Đây là trang test</h1>
          }}
        />
        <Route
          component={() => {
            return <h1>Có cái nịt trang này ko tồn tại</h1>
          }}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
