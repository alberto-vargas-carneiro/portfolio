import Chapter from "./Chapter";
import { SlPhone } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <div id="contact" className="max-[375px]:mx-8 mx-[50px] pt-[56px]">
      <Chapter>Contato</Chapter>
      <div className="flex gap-4 mb-3">
        <SlPhone className="text-2xl"></SlPhone>
        <span>(51) 981530409</span>
      </div>

      <div className="flex gap-4 mb-3">
        <HiOutlineMail className="text-2xl"></HiOutlineMail>
        <span>carneiroalberto@yahoo.com.br</span>
      </div>

      <div className="flex justify-around mb-3">
        <a
          href="https://wa.me/5551981530409"
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
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

      <div className="flex justify-around mb-3">
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
  );
}
