import React from "react";
import image11 from "../assets/imgs/IT.jpeg";
import Image from "next/image";

export default function Land() {
  return (
    <div className="h-[calc(100vh-57px)]">
      <div className="relative -z-10">
        <Image
          src={image11}
          alt="IT"
          className="h-[calc(100vh-20px)] object-cover overflow-visible blur-lg -translate-x-48 -translate-y-[25px]"
        />
        <div className="flex flex-col absolute top-5 text-white m-5 text-justify">
          <p className="max-[375px]:text-center text-[33px] self-center">Olá, me chamo Alberto</p>
          <p className="max-[375px]:text-center text-[22px] self-center pt-3 pb-14">
            Boas-vindas ao meu portfólio
          </p>
          <p className="text-xl">
            Neste espaço, você encontrará uma coleção de projetos nos quais
            tenho trabalhado, demonstrando minha paixão pela programação e meu
            compromisso em criar soluções inovadoras. Cada projeto representa um
            desafio único que enfrentei, buscando aprimorar minhas habilidades
            técnicas e criativas.
          </p>
          <p className="text-xl max-[375px]:hidden">
            Fique à vontade para explorar os projetos, conhecer as tecnologias
            que utilizei e entender minha abordagem em relação ao design e à
            funcionalidade.
          </p>
          <p className="text-xl">
            Espero que aprecie o meu portfólio e encontre inspiração para seus
            próprios projetos. 
          </p>
        </div>
      </div>

      <a href="#about" className="z-30">
        <div className="absolute bottom-0 w-full flex justify-center animate-bounce">
          <svg
            width="40"
            height="50"
            viewBox="0 0 150 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5L74.2879 75.2777C74.6795 75.675 75.3205 75.675 75.7121 75.2777L145 5"
              stroke="white"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              d="M5 69L74.2879 139.278C74.6795 139.675 75.3205 139.675 75.7121 139.278L145 69"
              stroke="white"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </a>
      <div className="w-full h-[50px] bg-white -translate-y-[37px]"></div>
    </div>
  );
}
