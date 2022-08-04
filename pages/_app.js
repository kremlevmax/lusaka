import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const router = useRouter();
  const isBlack = router.asPath !== "/" ? true : false;

  useEffect(() => {
    setBurgerMenuOpen(false);
  }, [router.asPath]);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <>
      <Navbar
        burgerMenuOpen={burgerMenuOpen}
        toggleBurgerMenu={toggleBurgerMenu}
        isBlack={isBlack}
      />

      {!burgerMenuOpen && (
        <>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
