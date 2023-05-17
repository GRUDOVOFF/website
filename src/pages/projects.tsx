import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "LIVE SAMP",
    description:
      "Крупнейший обозреватель мультиплеерной GTA-индустрии.",
    url: "https://vk.com/livesamp",
    image: require(`${assetsDir}/livesamp.png`),
    role: "Главный редактор",
  },
  {
    title: "GAME WORK",
    description: "Автоматизированная фриланс биржа GTA.",
    url: "https://vk.com/gamewk",
    image: require(`${assetsDir}/gamework.png`),
    role: "Администратор",
  },
  {
    title: "LIVE TRILOGY",
    description: "Новостное издание о мультиплеерах для GTA The Definitive Edition.",
    url: "https://vk.com/livetrlg",
    image: require(`${assetsDir}/livetrilogy.png`),
    role: "Главный редактор",
  },
  {
    title: "Братья Дюма",
    description: "Франшиза с десятками сообществ по проектам GTA.",
    url: "https://vk.com/alldumas",
    image: require(`${assetsDir}/dyuma.png`),
    role: "Бывший главный редактор",
  },
  {
    title: "FREE TRINITY GTA",
    description: "Самое популярное новостное сообщество по SAMP проекту Trinity GTA.",
    url: "https://vk.com/free_trinity",
    image: require(`${assetsDir}/freetrinity.png`),
    role: "Основатель",
  },
];

const title = "Проекты";
const description = "Тут я работаю/работал.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
