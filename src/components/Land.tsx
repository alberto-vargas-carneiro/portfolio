import React, { useContext } from "react";

export default function Land() {
  return (
    <div className="bg-[url('/IT.jpg')] bg-cover flex flex-col lg:h-[calc(100vh-57px)]">
      <div className="h-[58px] w-full bg-headerColor -translate-y-[57px] -z-10"></div>
      <div className={`flex flex-col text-white px-6 mb-10 text-justify min-[700px]:mx-14 lg:px-48`}>
        <p className="max-[386px]:text-center text-[28px] self-center min-[700px]:text-[40px] lg:pt-10 lg:text-5xl">Olá, me chamo Alberto</p>
        <p className="max-[386px]:text-center text-[20px] self-center pt-3 pb-8 min-[400px]:pb-16 min-[500px]:pb-[70px] min-[700px]:text-[30px] lg:pt-7 lg:pb-36">
          Boas-vindas ao meu portfólio
        </p>
        <p className="text-lg min-[700px]:text-[23px] min-[700px]:leading-10">
          Neste espaço, você encontrará uma coleção de projetos nos quais
          tenho trabalhado, demonstrando minha paixão pela programação e meu
          compromisso em criar soluções inovadoras. Cada projeto representa um
          desafio único que enfrentei, buscando aprimorar minhas habilidades
          técnicas e criativas.
        </p>
        <p className="text-lg min-[700px]:text-[23px] min-[700px]:leading-10">
          Fique à vontade para explorar os projetos, conhecer as tecnologias
          que utilizei e entender minha abordagem em relação ao design e à
          funcionalidade.
        </p>
        <p className="text-lg min-[700px]:text-[23px] min-[700px]:mb-5 min-[700px]:leading-10">
          Espero que aprecie o meu portfólio e encontre inspiração para seus
          próprios projetos.
        </p>
      </div>


      <a href="#about" className="">
        <div className="flex justify-center animate-bounce lg:absolute lg:right-1/2 lg:bottom-0">
          <svg
            width="30"
            height="25"
            viewBox="0 0 150 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" className="lg:h-16 lg:w-16"
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
      {/* <div className={`w-full h-[50px] -translate-y-[37px] ${darkMode ? "bg-[#2c2135]" : "bg-white"}`}></div> */}
    </div>
  );
}
