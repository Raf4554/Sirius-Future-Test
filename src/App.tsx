import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import AppRouter from "./routes/AppRouter"
import '../src/App.css'
const App = () => {
  return (
    <>
  <AppRouter/>
    </>
  )
}

export default App
