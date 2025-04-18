import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
  return(
    <>
    <div className="main-container">
      <Navbar />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
      
    </>
  )
}