import priconnect from "../assets/priconnect.png";
import echostream from "../assets/echostream.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Projects(){

    interface Project {
        projectName: string;
        codeURL: string;
        demoURL: string;
        projectIMG: StaticImageData;
        projectALT: string;
        projectTech: string[];
        projectDescription: string;
        classNames?: string;
    }

    const projects:Project[] = [
            {
                projectName: "Priconnect",
                codeURL: "https://github.com/choir27/priconnect",
                demoURL: "https://priconnect.netlify.app/",
                projectIMG: priconnect,
                projectALT: "website landing page preview of Priconnect",
                projectTech: ["TypeScript", "AppWrite", "Vite"],
                projectDescription:
                  "Priconnect is a social media web application that allows users to create, like and comment posts.  Users can also interact with each other by replying on comments and follow other accounts to prioritize their posts.",
              },
              {
                projectName: "EchoStream",
                codeURL: "https://github.com/choir27/EchoStream",
                demoURL: "https://echostream.netlify.app/",
                projectIMG: echostream,
                projectALT: "website landing page preview of EchoStream",
                projectTech: ["Next", "TypeScript", "AppWrite"],
                projectDescription:
                  "EchoStream is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings their own songs.",
              },
    ];


    return(
        <section id = "myProjects" className = "flex flex-col items-left p-2">
            <h2 className = "text-6xl my-12 px-5">Projects</h2>
            <section className = "flex">
                {projects.map((project: Project)=>{
                    return(
                        <section className = "p-4" key = {project.projectName}>
                            <Image src = {project.projectIMG} alt = {project.projectALT}/>
                            <h3 className = "pt-4 text-4xl">{project.projectName}</h3>
                            <div className = "flex justify-between w-2/6 mb-3">
                                <Link href = {project.demoURL} className = "border-b-2 border-b-black-700 text-lg pb-1 pt-2">Project Demo</Link>
                                <Link href = {project.codeURL} className = "border-b-2 border-b-black-700 text-lg pb-1 pt-2">Project URL</Link>
                            </div>
                            <div className = "flex justify-between w-2/5 mb-4">
                                {project.projectTech.map((language: string)=>{
                                    return(
                                        <span className = "uppercase text-base mt-2" key = {language}>
                                            {language}
                                        </span>
                                    )
                                })}
                            </div>
                            <p className = "text-base">
                                {project.projectDescription}
                            </p>
                        </section>
                    )
                })}
            </section>
        </section>
    )

}