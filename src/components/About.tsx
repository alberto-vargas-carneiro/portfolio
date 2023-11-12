import { useContext } from "react";
import { Tema } from "./Tema";
import Chapter from "./Chapter";

export default function About() {
  const { darkMode, darkModeOn, lightMode, english, changeLanguage } = useContext(Tema);

  return (
    <div id="about" className={`mx-[50px] pt-[70px] ${darkMode ? "bg-[#2c2135] text-white" : ""} lg:px-28 xl:px-56`}>
      {!english && (
        <>
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
        </>
      )}

      {english && (
        <>
          <Chapter>About</Chapter>
          <p className="text-justify min-[700px]:text-[23px]">
            I am a development enthusiast and I am currently in the second
            semester of the Computer Science course. I have a passion for the
            programming world and I am determined to pursue a career as a
            full-stack programmer. During my studies, I have acquired knowledge in
            several programming languages, frameworks and technologies relevant to
            full-stack development. I have experience in front-end, back-end and
            database development.
          </p>
          <br />
          <p className="text-justify min-[700px]:text-[23px]">
            In addition, I have solid interpersonal skills, which allow me to
            collaborate effectively as a team and communicate ideas clearly and
            concisely. If you are looking for a dedicated full-stack programmer,
            passionate about technology and committed to excellence, I am confident
            that I can add value to your organization. I am looking forward to
            contributing my knowledge and skills to the success of your project.
          </p>
        </>
      )}
    </div>
  );
}
