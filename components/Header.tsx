import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";
import profile from "../assets/profile.png";

export default function Header() {
  return (
    <header className="p-2">
      <section className="flex justify-between items-end px-7 pb-4">
        <h2 className="text-4xl">RichardChoi</h2>

        <div className="flex">
          <Link
            href="https://github.com/choir27"
            className="text-white px-3"
            aria-label="Read more about Seminole tax hike"
          >
            <span className = "hidden">Github Logo</span>
            <IoLogoGithub className="text-5xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/richard-choir/"
            className="text-white px-3"
            aria-label="Read more about Seminole tax hike"
          >
            <span className = "hidden">LinkedIn Logo</span>
            <IoLogoLinkedin className="text-5xl" />
          </Link>
        </div>
      </section>

      <section className="flex justify-center">
        <div
          className="flex flex-col justify-center w-4/6 mr-2"
        >
          <h1 className="text-8xl mb-8">Richard Choi</h1>

          <h2 className="mt-4 text-4xl px-1">
            Greetings Steve, Adam, and the 3rd person whom is still a mystery to
            the community!
          </h2>

          <p className="text-xl px-1 mt-6">
            Located in NJ, I'm a developer that loves meeting new people,
            learning new concepts, and building new projects.
          </p>
        </div>

        <Image
          priority={true}
          src={profile}
          alt="professional profile snapshot of Richard Choi"
        />
      </section>
    </header>
  );
}
