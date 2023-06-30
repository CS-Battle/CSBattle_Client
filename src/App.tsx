import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import GameLayout from "layout/GameLayout"
import LobbyLayout from "layout/LobbyLayout"

import GamePage from "pages/GamePage/GamePage"
import LoginPage from "pages/LoginPage"
import LobbyPage from "pages/LobbyPage"
import { useEffect } from "react"
import { useLocalstorage } from "hooks/useLocalstorage"
import ResultLayout from "layout/ResultLayout"
import ResultPage from "pages/ResultPage"

function App() {
  const { load } = useLocalstorage()

  useEffect(() => {
    const userId = load("userId")

    if (userId === null && window.location.pathname !== "/login") {
      window.location.href = "/login"
    }
  }, [load])

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lobby" element={<LobbyLayout />}>
          <Route path="" element={<LobbyPage />} />
        </Route>
        <Route path="/game" element={<GameLayout />}>
          <Route path="" element={<GamePage />} />
        </Route>
        <Route path="/result" element={<ResultLayout />}>
          <Route path="" element={<ResultPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
