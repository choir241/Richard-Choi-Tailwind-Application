import Project from "../components/Project";
import Documentation from "../components/Documentation";
import OpenSource from "../components/OpenSource";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import LookingForward from "../components/LookingForward";

export default function Home() {
  return (
    <main>
      <Project />

      <Documentation />

      <OpenSource />

      <Experience />

      <LookingForward />

      <AboutMe />
    </main>
  );
}
