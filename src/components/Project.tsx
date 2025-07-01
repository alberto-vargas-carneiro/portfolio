import ProjectItem from "./ProjectItem";
import portfolio from "../assets/imgs/home.png";
import kbca from "../assets/imgs/kbca.png";
import alexa from "../assets/imgs/alexa.png";
import todo from "../assets/imgs/todo.png";
import workout from "../assets/imgs/workout.png";
import Chapter from "./Chapter";
import { useContext, useEffect, useState } from "react";
import { Tema } from "./Tema";
import axios from "axios";

export default function Project() {
  const { darkMode, english } = useContext(Tema);
  const [repos, setRepos] = useState([]);
  const imgs = [workout, todo, portfolio, alexa, kbca];

  const handleRepos = async () => axios.get(`https://api.github.com/users/alberto-vargas-carneiro/repos`)
    .then(response => {
      const data = response.data;
      const sortedData = data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setRepos(sortedData.filter((repo: any) => repo.topics.includes("portfolio")));
    })

  useEffect(() => {
    handleRepos();
  }, []);

  return (
    <div id="project" className={`mx-[50px] pt-[70px] ${darkMode ? "text-white" : ""} lg:px-28 xl:px-56`}>
      <>
        <Chapter>Projetos</Chapter>

        <div className="md:grid grid-cols-2 gap-x-5 lg:grid-cols-3">

          {repos.map((repo: { description: string, topics: any[], homepage: any, name: string, html_url: any }, i) => {
            const { description, topics, homepage, name, html_url } = repo;
            const topicos = topics.filter((topic: any) => topic !== "portfolio").map((e) => e.slice(0, 1).toUpperCase() + e.slice(1));
            const isSpecial = name === 'to-do-list'

            return (
              <>
                {isSpecial ? (
                  <ProjectItem key={repos[i]} src={imgs[i]} alt={name} repositorio={html_url} tag={topicos} desc={description} />
                ) : (
                  <ProjectItem key={repos[i]} src={imgs[i]} alt={name} site={homepage} repositorio={html_url} tag={topicos} desc={description} />
                )}
              </>
            )
          })}
        </div>
      </>
    </div>
  );
}
