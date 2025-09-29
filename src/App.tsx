import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1>Ola mundo!</h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
