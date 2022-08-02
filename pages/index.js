import FrontPage from "../components/FrontPage";
import Support from "../components/Support";
import Details from "../components/Details";
import { Quote } from "../components/Quote";
import Photo from "../components/Photo";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Support />
      <Details />
      <Quote />
      <Photo />
      <Contacts />
    </>
  );
}
