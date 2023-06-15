import ProjectItem from "./ProjectItem";
import portfolio from "../assets/imgs/Sem título.png";
import kbca from "../assets/imgs/kbca.png";
import alexa from "../assets/imgs/alexa.png";
import Chapter from "./Chapter";
import { useContext } from "react";
import { Tema } from "./Tema";

export default function Project() {
  const { darkMode, english } = useContext(Tema);
  return (
    <div id="project" className={`mx-[50px] pt-[70px] ${darkMode ? "text-white" : ""} lg:px-28 xl:px-48`}>
      {!english && (
        <>
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
            <ProjectItem
              id="kbça" src={kbca} alt="KBÇA" link="https://alberto-vargas-carneiro.github.io/my-first-site/" tag="JavaScript" tag2="HTML" tag3="CSS"
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
            ></ProjectItem>
            <ProjectItem
              id="Alexa" src={alexa} alt="Alexa" link="https://alberto-vargas-carneiro.github.io/site-alexa/" tag="JavaScript" tag2="HTML" tag3="CSS"
              desc="Aqui, gostaria de compartilhar um projeto especial que desempenhou um papel fundamental em minha jornada como desenvolvedor web."

              desc2="É importante ressaltar que este projeto foi inspirado por um vídeo do canal Bedimcode no YouTube, e, embora não seja uma criação autoral, 
              decidi incluí-lo porque representa um marco significativo para mim. Este projeto marca o meu primeiro passo no universo da programação web 
              e foi uma experiência valiosa, pois me proporcionou uma compreensão prática de como as coisas funcionam nesse campo."

              desc3="Este projeto específico serviu como uma base sólida para a minha formação em front-end, fornecendo uma oportunidade de aprendizado prático 
              em HTML, CSS e JavaScript. Através dele, pude adquirir conhecimentos essenciais em termos de estruturação de páginas, estilização de elementos 
              e funcionalidades interativas. Observar como essas tecnologias se aplicam na prática foi uma experiência valiosa e enriquecedora."
            ></ProjectItem>
          </div>
        </>
      )}
      {english && (
        <>
          <Chapter>Projects</Chapter>
          <div className="md:grid grid-cols-2 gap-x-5 lg:grid-cols-3">
            <ProjectItem
              id="portfolio" src={portfolio} alt="Portfolio" link="" tag="Next.js" tag2="TypeScript" tag3="TailwindCSS"
              desc="This website is an incredible project that represents my experience as a developer. In it, I have gathered all my projects 
              completed so far, providing a detailed description of each one and highlighting the technologies used in their creation."

              desc2="For its construction, I chose to use a powerful combination of technologies, including Next.js, which provides an 
              efficient development experience and optimized performance. Additionally, I integrated React with TypeScript, ensuring a 
              more robust and secure code."

              desc3="For the design, I relied on the help of Tailwind, a utility-first CSS framework that allowed me to create attractive 
              and responsive interfaces quickly and efficiently."

              desc4="I take pride in saying that this website represents my passion for programming and my commitment to delivering results. 
              I am excited to share this project and hope that it demonstrates my knowledge and skills as a programmer."
            ></ProjectItem>
            <ProjectItem
              id="kbça" src={kbca} alt="KBÇA" link="https://alberto-vargas-carneiro.github.io/my-first-site/" tag="JavaScript" tag2="HTML" tag3="CSS"
              desc="This website represents my first personal project, in which I had the opportunity to apply my knowledge of HTML, CSS, and 
              JavaScript independently. It started as an initial idea for a relative's business, but throughout the process, I decided to turn 
              it into a project for my personal portfolio."

              desc2="Although I didn't have the guidance of a professional designer, I am satisfied with the result. The website has 
              a responsive layout that adapts to different screen sizes, ensuring a consistent experience for users. I also developed an image 
              carousel using pure JavaScript, without the need for external libraries."

              desc3="Additionally, I implemented a dark mode feature to provide an alternative visual option for visitors. A customized scroll 
              bar and a button for WhatsApp contact were also added to enhance the website's usability."

              desc4="This project represents my entry into the world of web development and showcases my ability to create functional and 
              aesthetically pleasing solutions."
            ></ProjectItem>
            <ProjectItem
              id="Alexa" src={alexa} alt="Alexa" link="https://alberto-vargas-carneiro.github.io/site-alexa/" tag="JavaScript" tag2="HTML" tag3="CSS"
              desc="Here, I would like to share a special project that played a pivotal role in my journey as a web developer."

              desc2="It's important to note that this project was inspired by a video from the Bedimcode YouTube channel, and while it's not an 
              original creation, I decided to include it because it represents a significant milestone for me. This project marks my first step 
              into the world of web programming and was a valuable experience that provided me with practical understanding of how things work 
              in this field."

              desc3="This specific project served as a solid foundation for my front-end education, offering an opportunity for hands-on 
              learning in HTML, CSS, and JavaScript. Through it, I was able to acquire essential knowledge in terms of page structuring, 
              element styling, and interactive functionalities. Observing how these technologies apply in practice was a valuable and enriching 
              experience."
            ></ProjectItem>
          </div>
        </>
      )}
    </div>
  );
}
