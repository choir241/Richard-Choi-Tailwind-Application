import Project from "../components/Project";
import Documentation from "../components/Documentation";
import OpenSource from "../components/OpenSource";

export default function Home() {
  return (
    <main>
      <Project />

      <Documentation />

      <OpenSource />
    </main>
  );
}
