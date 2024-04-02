import Project from "../components/Project";
import Documentation from "../components/Documentation";
import OpenSource from "../components/OpenSource";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <main>
      <Project />

      <Documentation />

      <OpenSource />

      <AboutMe />
    </main>
  );
}
