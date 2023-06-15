import React, { useContext } from "react";
import { Tema } from "./Tema";

export default function Land() {
  const { english } = useContext(Tema);
  return (
    <div className="bg-[url('/IT.jpg')] bg-cover flex flex-col lg:h-[calc(100vh-57px)]">
      <div className="h-[58px] w-full bg-headerColor absolute -translate-y-[57px] -z-10"></div>
      <div className={`flex flex-col text-white px-6 pt-[26px] mb-10 text-justify min-[700px]:mx-14 lg:px-28 xl:px-48 xl:pt-20`}>
        {!english && (
          <>
            <p className="max-[386px]:text-center text-[28px] self-center min-[700px]:text-[40px] lg:pt-10 lg:text-5xl">Olá, me chamo Alberto</p>
            <p className="max-[386px]:text-center text-[20px] self-center pt-3 pb-8 min-[400px]:pb-16 min-[500px]:pb-[70px] min-[700px]:text-[30px] lg:pt-7 lg:pb-16 xl:pt-12 xl:pb-36">
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
          </>
        )}
        {english && (
          <>
            {/* translate all p elements above into english */}
            <p className="max-[386px]:text-center text-[28px] self-center min-[700px]:text-[40px] lg:pt-10 lg:text-5xl">Hello, my name is Alberto</p>
            <p className="max-[386px]:text-center text-[20px] self-center pt-3 pb-8 min-[400px]:pb-16 min-[500px]:pb-[70px] min-[700px]:text-[30px] lg:pt-7 lg:pb-16 xl:pt-12 xl:pb-36">
              Welcome to my portfolio
            </p>
            <p className="text-lg min-[700px]:text-[23px] min-[700px]:leading-10">
              In this space, you will find a collection of projects I have been
              working on, demonstrating my passion for programming and my
              commitment to creating innovative solutions. Each project represents a
              unique challenge I have faced, seeking to improve my technical and
              creative skills.
            </p>
            <p className="text-lg min-[700px]:text-[23px] min-[700px]:leading-10">
              Feel free to explore the projects, learn about the technologies
              I used and understand my approach to design and functionality.
            </p>
            <p className="text-lg min-[700px]:text-[23px] min-[700px]:mb-5 min-[700px]:leading-10">
              I hope you enjoy my portfolio and find inspiration for your
              own projects.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
