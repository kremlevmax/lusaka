import styles from "../styles/modules/Home.module.scss";
import FrontPage from "../components/FrontPage";
import Support from "../components/Support";
import Details from "../components/Details";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Support />
      <Details />
    </>
  );
}
