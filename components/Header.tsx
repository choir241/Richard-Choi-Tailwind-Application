import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import profile from "../assets/profile.png";

export default function Header() {
  return (
    <header className="p-2 pt-10">
      <section className="flex justify-center max-[1000px]:flex-col max-[1000px]:items-center">
        <div className="flex flex-col justify-center w-4/6 mr-2">
          <h1 className="text-8xl mb-8">Richard Choi</h1>

          <h2 className="mt-4 text-4xl px-1">
            Greetings Steve, Adam, and the 3rd person whom is still a mystery to
            the community!
          </h2>

          <p className="text-4xl px-1 mt-6 mb-10">
            Located in NJ, I'm a developer that loves meeting new people,
            learning new concepts, and building new projects.
          </p>

          <div className="flex max-[1000px]:items-center max-[1000px]:justify-center">
            <Link
              href="https://github.com/choir27"
              className="text-white px-1 flex items-center text-2xl"
              aria-label="Read more about Seminole tax hike"
            >
              <span className="hidden">Github Logo</span>
              My Github
              <IoLogoGithub className="text-5xl ml-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/richard-choir/"
              className="text-white px-3 flex items-center text-2xl"
              aria-label="Read more about Seminole tax hike"
            >
              <span className="hidden">LinkedIn Logo</span>
              My LinkedIn
              <IoLogoLinkedin className="text-5xl ml-4" />
            </Link>
          </div>
        </div>

        <Image
          className="max-[800px]:px-10 pt-10"
          priority={true}
          src={profile}
          alt="professional profile snapshot of Richard Choi"
        />
      </section>
    </header>
  );
}
