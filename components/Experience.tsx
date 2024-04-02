import Gridiron from "../assets/gridIron.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="openSource">
      <h2 className="text-6xl my-12 px-5">GridIron</h2>
      <p className="text-2xl px-6 pb-6">
        GridIron is an open source application being led by Shashi Lo, a Senior
        UX Engineer at Microsoft. It is a NFL project to figure out who the last
        survivor will be by picking teams, and it helps bridge the gap for
        junior developers to work as a team in a corporate process by planning,
        doing code reviews together, working closely together and separately
        into our respective roles. While working on this project, I was able to
        learn so much about the corporate process and using agile methodologies,
        like fibonnacci ticket point scale, epics and user stories, and how to
        truly communicate with your team and collaborate with other developers
        from other pod groups. By having to research and present a low-level
        explanation of why particular technology tools were appropriate for our
        project, I was able to explore a new field of technology that I was
        still unfamiliar with and discover another passion of mine.
      </p>

      <Link
        href="https://www.youtube.com/watch?v=O6rnTPob7VY&ab_channel=CodingwithShashi"
        className="flex justify-center p-6"
      >
        <Image
          src={Gridiron}
          alt="GridIron preview thumbnail of all team members"
          width={1000}
        />
      </Link>
    </section>
  );
}
