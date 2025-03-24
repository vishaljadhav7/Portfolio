
import { Button } from "@/components/ui/button"
import {  Github, } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Dev Dates",
      description:
        "Dev Dates: A dynamic social networking platform designed to connect IT professionals, fostering collaboration, knowledge exchange, and professional growth through real-time communication and community engagement.",
      image: "/devdates.png",
      repolink : "https://github.com/vishaljadhav7/devDateUI",
      techStack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Web Sockets", "Tailwind CSS", "Daisy UI"],
    },
    {
      title: "Docu Nexus",
      description:
        "An easy-to-use platform that helps people understand their contracts fast by using smart AI to point out important details, risks, and possibilities, all while keeping documents safe and making work simpler with a smooth and friendly design",
      image: "/docunexus.png",

      repolink : "https://github.com/vishaljadhav7/DocuNexus",
      techStack: [ "TypeScript", "Next.js", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "Prisma", "Gemini AI" ,"Tailwind CSS", "Shadcn UI"],
    },
    {
      title: "Project Ease",
      description:
        "A collaborative task management application that allows teams to organize projects, assign tasks, set deadlines, and track progress.",
      image: "/projectease.png",
      repolink : "https://github.com/vishaljadhav7/project-ease",
      techStack: [ "TypeScript", "Next.js",  "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    },
    {
      title: "Food King",
      description:
        "Food King is a food ordering platform designed to satisfy your cravings with just a click. Whether you're exploring new cuisines or ordering your favorite dish, Food King makes the process effortless and enjoyable.",
      image: "/foodking.jpeg",
      repolink : "https://github.com/vishaljadhav7/food-king",
      techStack: [ "JavaScript", "React.js",  "Redux Toolkit", "Tailwind CSS"],
    },
    {
      title: "Stream Hub",
      description:
        "Gemini Movies is a streaming web application that delivers an immersive viewing experience. Dive into a vast library of movies, watch high-quality trailers, and explore the world of Gemini Movies for a truly cinematic experience.",
      image: "/streamhub.png",
      repolink : "https://github.com/vishaljadhav7/streamhub",
      techStack: [ "JavaScript", "React.js", "Redux Toolkit", "Gemini AI", "Firebase","Tailwind CSS"],
    },
  ]

  return (
<section id="projects" className="py-20">
  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
    My Projects
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {projects.map((project, index) => (
      <div
  key={index}
  className="bg-card/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 group"
>
  <div className="relative h-52">
    <img
      src={project.image}
      alt={project.title}
      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2 text-foreground/95 tracking-tight">{project.title}</h3>
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed opacity-80">{project.description}</p>
<div className="flex flex-wrap gap-2 mb-4">
  {project.techStack.map((tech, techIndex) => (
    <Badge
      key={techIndex}
      variant="outline"
      className="relative bg-gradient-to-br from-blue-900/90 to-blue-950/90 border border-blue-700/50 text-blue-100 px-2 py-1 tracking-wide uppercase rounded-md overflow-hidden transition-all duration-300 hover:from-blue-800/90 hover:to-blue-900/90 hover:shadow-[0_4px_12px_rgba(0,0,255,0.3)] group"
    >
      <span className="relative z-10">{tech}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-500" />
    </Badge>
  ))}
</div>

<div className="flex gap-3">
  <Button
    variant="ghost"
    size="sm"
    className="relative  bg-transparent text-blue-500  px-2 py-1.5 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-900/20 hover:shadow-[0_4px_12px_rgba(0,0,255,0.3)] group ml-auto cursor-pointer"
  >
<a href={project.repolink } target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">

  <Github className="h-4 w-4 relative z-10" />

    Repo Link
</a>
  </Button>
</div>

    
  </div>
</div>
    ))}
  </div>
</section>
  )
}

