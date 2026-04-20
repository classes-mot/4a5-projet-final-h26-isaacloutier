import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}