import {
    Code2,
    Database,
    FileJson,
    Layers,
    LayoutGrid,
    Server,
    Workflow,
    Braces,
    KeyRound,
    Palette,
    ServerCog
  } from "lucide-react"
  
  export default function Skills() {
    const frontendSkills = [
      { name: "JavaScript", icon: <Code2 className="h-6 w-6" /> },
      { name: "TypeScript", icon: <FileJson className="h-6 w-6" /> },
      { name: "React.js", icon: <Workflow className="h-6 w-6" /> },
      { name: "Next.js", icon: <ServerCog className="h-6 w-6" /> },
      { name: "Redux Toolkit", icon: <Layers className="h-6 w-6" /> },
      { name: "Tailwind CSS", icon: <Palette className="h-6 w-6" /> },
      { name: "Shadcn UI", icon: <LayoutGrid className="h-6 w-6" /> },
    ]
  
    const backendSkills = [
      { name: "Node.js", icon: <Server className="h-6 w-6" /> },
      { name: "Express.js", icon: <Braces className="h-6 w-6" /> },
      { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
      { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
      { name: "Prisma", icon: <Database className="h-6 w-6" /> },
      { name: "Authentication", icon: <KeyRound className="h-6 w-6" /> },
    ]
  
    return (
<section id="skills" className="py-20">
  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
    My Skills
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground/90">
        <Code2 className="h-6 w-6 text-primary" />
        Frontend Development
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {frontendSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-card p-5 rounded-xl shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/10"
          >
            <div className="text-primary bg-primary/10 p-2 rounded-full">{skill.icon}</div>
            <span className="font-medium text-foreground/90">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-foreground/90">
        <Server className="h-6 w-6 text-primary" />
        Backend Development
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {backendSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-card p-5 rounded-xl shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/10"
          >
            <div className="text-primary bg-primary/10 p-2 rounded-full">{skill.icon}</div>
            <span className="font-medium text-foreground/90">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    )
  }
  
  