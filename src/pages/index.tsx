import Project from "@/components/Project";
import Header from "../components/Header";
import Land from "../components/Land";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home" className="">
      <Header></Header>
      <Land></Land>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
