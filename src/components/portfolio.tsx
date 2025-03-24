
import Header from "./sections/header"
import About from "./sections/about"
import Skills from "./sections/skills"
import Projects from "./sections/projects"
import Contact from "./sections/contact"


export default function Portfolio() {

  return ( 
    <div className="min-h-screen  bg-gradient-to-b from-background to-muted/20 text-foreground font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

