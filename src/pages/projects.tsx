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
    description: "Автоматизированная фриланс биржа GTA",
    url: "https://vk.com/gamewk",
    image: require(`${assetsDir}/gamework.png`),
    role: "Администратор",
  },
  {
    title: "Mongo Seeding",
    description: "Ultimate solution for populating MongoDB database.",
    url: "https://github.com/pkosiec/mongo-seeding",
    image: require(`${assetsDir}/mongo-seeding.png`),
    role: "Author",
  },
  {
    title: "Terminer",
    description: "Upgrade your terminal experience with a single command.",
    url: "https://github.com/pkosiec/terminer",
    image: require(`${assetsDir}/terminer.png`),
    role: "Author",
  },
  {
    title: "Gophers Silesia",
    description: "Go & Cloud Native Meetup organized in Katowice, Poland",
    url: "https://www.meetup.com/GophersSilesia",
    image: require(`${assetsDir}/gophers-silesia.png`),
    role: "Organizer",
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
