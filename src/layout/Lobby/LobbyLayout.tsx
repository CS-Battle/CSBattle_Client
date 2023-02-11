import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LobbyPage from "pages/LobbyPage";

const LobbyLayout = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-row justify-center overflow-hidden bg-OnPrimaryContainer py-10">
        <div className="relative bg-white w-9/12 h-full aspect-video px-7 py-7 flex-col justify-center shadow-xl ring-8 ring-Secondary rounded-lg">
          <Header />
          <LobbyPage />
          <Footer />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LobbyLayout;

