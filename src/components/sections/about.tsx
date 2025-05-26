
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function About() {
  return (
    <section id="home" className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Vishal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">Web Developer</h2>
          <p className="text-muted-foreground mb-6 max-w-lg">
            As a passionate web developer, I create responsive and user-friendly web applications using modern
            technologies. I'm dedicated to writing clean, efficient code and constantly learning new skills to stay at
            the cutting edge of web development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              <a href="https://drive.google.com/file/d/11CA8w6jMg3JfdXmNJpS-giNlJXzMcU3L/view"  className="flex items-center">
                CV Link
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a
                href="https://github.com/vishaljadhav7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 flex justify-center">
          <div className="relative w-28 h-28 md:w-[200px] md:h-[200px] mb-4 md:mb-0">
            <img
              src="/vic.jpg"
              alt="Vishal"
              className="rounded-4xl object-cover border-4 border-primary/20"
            />
          </div>
        </div>
      </div>

      <div id="about" className="mt-24 pt-8">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="font-medium">Bachelor of Engineering in Computer Science</h4>
              <p className="text-muted-foreground">University of Technology</p>
              <p className="text-sm text-muted-foreground">2018 - 2023</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="mb-4">
              <h4 className="font-medium">Full Stack Developer</h4>
              <p className="text-muted-foreground">Personal Projects & Freelance</p>
              <p className="text-sm text-muted-foreground">1.5+ years</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-card rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground leading-relaxed">
          As a <span className="font-semibold text-gray-700">Full Stack Developer</span>, I'm skilled in JavaScript, React, Next.js, Redux Toolkit, Node.js, Express, and both SQL and NoSQL databases. I'm good at building and managing websites that work well and feel smooth to use. I can create easy-to-use front-end designs with clean code and handle the back-end systems too, using the latest tools and methods. I thrive as a collaborative team player, working seamlessly with cross-functional teams to create outstanding, end-to-end web solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

