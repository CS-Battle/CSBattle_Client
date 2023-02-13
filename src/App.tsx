import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GameLayout from "./layout/GameLayout";
import LobbyLayout from "./layout/Lobby/LobbyLayout";

import GamePage from "./pages/GamePage";
import LobbyPage from "./pages/LobbyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lobby" element={<LobbyLayout />}>
          <Route path="gameSelect" element={<LobbyPage />} />
        </Route>
        <Route path="/game" element={<GameLayout />}>
          <Route path="" element={<GamePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
