import ProjectItem from "./ProjectItem";
import portfolio from "../assets/imgs/Sem título.png";
import kbca from "../assets/imgs/kbca.png";
import alexa from "../assets/imgs/alexa.png";
import Chapter from "./Chapter";
import { useContext } from "react";
import { Tema } from "./Tema";

export default function Project() {
  const { darkMode, darkModeOn, lightMode } = useContext(Tema);
  return (
    <div id="project" className={`mx-[50px] pt-[70px] ${darkMode ? "text-white" : ""} lg:px-48`}>
      <Chapter>Projetos</Chapter>
      <div className="md:grid grid-cols-2 gap-x-5 lg:grid-cols-3">
        <ProjectItem
          id="portfolio" src={portfolio} alt="Portfolio" link="" tag="Next.js" tag2="TypeScript" tag3="TailwindCSS"
          desc="Este site é um projeto incrível que representa minha experiência como desenvolvedor. Nele, reuni todos os meus projetos 
          realizados até o momento, fornecendo uma descrição detalhada de cada um e destacando as tecnologias utilizadas em suas criações."

          desc2="Para sua construção, optei por utilizar uma poderosa combinação de tecnologias, incluindo o Next.js, que proporciona uma 
          experiência de desenvolvimento eficiente e um desempenho otimizado. Além disso, integrei o React com TypeScript, o que garante um 
          código mais robusto e seguro."

          desc3="Para o design, contei com a ajuda do tailwind, uma biblioteca de estilos utilitários que permitiu criar interfaces 
          atraentes e responsivas de forma rápida e eficiente."

          desc4="Tenho orgulho de dizer que esse site representa minha paixão pela programação e meu comprometimento com o resultado.
          Fico empolgado em compartilhar esse projeto e espero que ele demonstre meu conhecimento e habilidades como programador."
        ></ProjectItem>
        <ProjectItem id="kbça" src={kbca} alt="KBÇA" link="https://alberto-vargas-carneiro.github.io/my-first-site/" tag="JavaScript" tag2="HTML" tag3="CSS"
          desc="Este site representa meu primeiro projeto pessoal, no qual tive a oportunidade de aplicar meus conhecimentos em HTML, 
          CSS e JavaScript de forma independente. Surgiu a partir de uma ideia inicial para o negócio de um parente, mas ao longo do processo, 
          decidi transformá-lo em um projeto para meu portfólio pessoal."

          desc2="Embora não tenha contado com a orientação de um designer profissional, fiquei satisfeito com o resultado alcançado. O site possui 
          um layout responsivo que se adapta a diferentes tamanhos de tela, garantindo uma experiência consistente para os usuários. Também 
          desenvolvi um carrossel de imagens utilizando JavaScript puro, sem a necessidade de utilizar bibliotecas externas."

          desc3="Além disso, implementei um modo de tema escuro para proporcionar uma opção visual alternativa aos visitantes. Uma barra de rolagem 
          personalizada e um botão para contato via WhatsApp também foram adicionados para melhorar a usabilidade do site."

          desc4="Este projeto representa meu início no mundo do desenvolvimento web e minha capacidade 
          de criar soluções funcionais e esteticamente agradáveis."
        >
        </ProjectItem>
        <ProjectItem id="Alexa" src={alexa} alt="Alexa" link="https://alberto-vargas-carneiro.github.io/site-alexa/" tag="JavaScript" tag2="HTML" tag3="CSS"
          desc="Aqui, gostaria de compartilhar um projeto especial que desempenhou um papel fundamental em minha jornada como desenvolvedor web."

          desc2="É importante ressaltar que este projeto foi inspirado por um vídeo do canal Bedimcode no YouTube, e, embora não seja uma criação autoral, 
          decidi incluí-lo porque representa um marco significativo para mim. Este projeto marca o meu primeiro passo no universo da programação web 
          e foi uma experiência valiosa, pois me proporcionou uma compreensão prática de como as coisas funcionam nesse campo."

          desc3="Este projeto específico serviu como uma base sólida para a minha formação em front-end, fornecendo uma oportunidade de aprendizado prático 
          em HTML, CSS e JavaScript. Através dele, pude adquirir conhecimentos essenciais em termos de estruturação de páginas, estilização de elementos 
          e funcionalidades interativas. Observar como essas tecnologias se aplicam na prática foi uma experiência valiosa e enriquecedora."
        ></ProjectItem>
      </div>
    </div>
  );
}
