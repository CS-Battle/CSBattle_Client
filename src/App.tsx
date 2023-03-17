import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import GameLayout from "layout/GameLayout"
import LobbyLayout from "layout/LobbyLayout"

import GamePage from "pages/GamePage"
import LoginPage from "pages/LoginPage"
import LobbyPage from "pages/LobbyPage"
import { useEffect } from "react"
import { useLocalstorage } from "hooks/useLocalstorage"

function App() {
  const { load } = useLocalstorage()

  useEffect(() => {
    const userId = load("userId")

    if (userId === null && window.location.pathname !== "/login") {
      window.location.href = "/login"
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lobby" element={<LobbyLayout />}>
          <Route path="" element={<LobbyPage />} />
        </Route>
        <Route
          path="/game"
          element={
            <GameLayout>
              <GamePage />
            </GameLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
