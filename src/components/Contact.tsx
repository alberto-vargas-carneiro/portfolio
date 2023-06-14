import Chapter from "./Chapter";
import { SlPhone } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { useContext } from "react";
import { Tema } from "./Tema";

export default function Contact() {
  const { darkMode, darkModeOn, lightMode } = useContext(Tema);
  return (
    <div id="contact" className={`max-[375px]:mx-8 mx-[50px] pt-[70px] ${darkMode ? "text-white" : ""} `}>
      <Chapter>Contato</Chapter>
      <div className="md:flex md:justify-around lg:mb-14">
        <div className="flex gap-4 mb-3 min-[700px]:text-[22px]">
          <SlPhone className="text-2xl min-[700px]:text-[30px]"></SlPhone>
          <span>(51) 981530409</span>
        </div>

        <div className="flex gap-4 mb-3 min-[700px]:text-[22px]">
          <HiOutlineMail className="text-2xl min-[700px]:text-[30px]"></HiOutlineMail>
          <span>carneiroalberto@yahoo.com.br</span>
        </div>
      </div>

      <div className="lg:flex lg:justify-around lg:mb-14">
        <div className="flex max-[1023px]:justify-around mb-3 lg:justify-around lg:w-1/2">
          <a href="https://wa.me/5551981530409" target="_blank" rel="noopener noreferrer" className="flex">
            <div className="bg-whats rounded-xl flex p-2 border border-black text-white">
              <BsWhatsapp className="text-xl mr-1"></BsWhatsapp>WhatsApp
            </div>
          </a>
          <a href="https://github.com/alberto-vargas-carneiro" target="_blank">
            <div className="bg-black rounded-xl flex p-2 border border-black text-white">
              <FiGithub className="text-xl mr-1"></FiGithub>GitHub
            </div>
          </a>
        </div>

        <div className="flex max-[1023px]:justify-around mb-3 lg:justify-around lg:h-fit lg:w-1/2">
          <a href="/cv1.pdf" download="Alberto Vargas Carneiro">
            <div className="bg-purple-700 rounded-xl flex p-2 border border-black text-white">
              <span>Baixar currículo</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/alberto-vargas-carneiro/" target="_blank"
            className="flex justify-center items-center"
          >
            <div className="bg-linkedin rounded-xl flex p-2 border border-black text-white">
              <BsLinkedin className="text-xl translate-y-[2px] mr-1"></BsLinkedin>
              LinkedIn
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
