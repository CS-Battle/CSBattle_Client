import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const LobbyLayout = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center xl:justify-start overflow-hidden bg-OnPrimaryContainer px-20 py-10">
        <div className="relative bg-white flex-col aspect-[16/7] max-xl  px-1 py-1 justify-center shadow-xl ring-8 ring-Secondary rounded-lg">
          <Header />
          <Outlet />
        </div>

        <div className="relative flex-none px-7 py-7 justify-center">
          <Footer />
        </div>

      </div>
    </>
  );
};

export default LobbyLayout;

