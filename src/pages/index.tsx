import Project from "@/components/Project";
import Header from "../components/Header";
import Land from "../components/Land";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useContext } from "react";
import { Tema } from "@/components/Tema";
import Head from "next/head";

export default function Home() {

  const { darkMode } = useContext(Tema);

  return (
    <div id="home" className={`${darkMode ? "bg-[#2c2135]" : ""}`}>
      <Head>
        <title>Alberto Vargas Carneiro</title>
        <meta name="description" content="Portfólio de Alberto Vargas Carneiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header></Header>
      <Land></Land>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
