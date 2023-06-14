import { useContext } from "react";
import { Tema } from "./Tema";
import Chapter from "./Chapter";

export default function About() {
  const { darkMode, darkModeOn, lightMode } = useContext(Tema);
  return (
    <div id="about" className={`mx-[50px] pt-[70px] ${darkMode ? "bg-[#2c2135] text-white" : ""} lg:px-48`}>
      <Chapter>Sobre</Chapter>
      <p className="text-justify min-[700px]:text-[23px]">
        Sou um entusiasta do desenvolvimento e estou atualmente no segundo
        semestre do curso de Ciência da Computação. Tenho uma paixão pelo mundo
        da programação e estou determinado a seguir uma carreira como
        programador full-stack. Durante meus estudos, tenho adquirido
        conhecimentos em várias linguagens de programação, frameworks e
        tecnologias relevantes para o desenvolvimento full-stack. Tenho
        experiência em desenvolvimento front-end, back-end e banco de dados.
      </p>
      <br />
      <p className="text-justify min-[700px]:text-[23px]">
        Além disso, tenho habilidades interpessoais sólidas, que me permitem
        colaborar efetivamente em equipe e comunicar ideias de forma clara e
        concisa. Se você procura um programador full-stack dedicado, apaixonado
        por tecnologia e comprometido com a excelência, estou confiante de que
        posso agregar valor à sua organização. Estou ansioso para contribuir com
        meu conhecimento e habilidades para o sucesso do seu projeto.
      </p>
    </div>
  );
}
