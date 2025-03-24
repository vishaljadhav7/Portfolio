import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"  

export default function Contact() {
  return (
<section id="contact" className="py-20">
  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
    Contact Me
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border/20">
      <h3 className="text-2xl font-semibold mb-4 text-foreground/90">Get In Touch</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Feel free to reach out if you're looking for a developer...
      </p>
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <a href="mailto:vishalj.1776@gmail.com" className="hover:text-primary transition-colors">
          vishalj.1776@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Github className="h-5 w-5 text-primary" />
          <a href="https://github.com/vishaljadhav7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            github.com/vishaljadhav7
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Linkedin className="h-5 w-5 text-primary" />
          <a href="https://www.linkedin.com/in/vishal-jadhav-5a251428b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            linkedin.com/in/vishal-jadhav-5a251428b
          </a>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant="outline" size="icon" className="border-primary/30 hover:bg-primary/10 transition-all duration-200">
          <a href="https://github.com/vishaljadhav7" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" className="border-primary/30 hover:bg-primary/10 transition-all duration-200">
          <a href="https://www.linkedin.com/in/vishal-jadhav-5a251428b/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
      </div>
    </div>
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border/20">
      <h3 className="text-2xl font-semibold mb-4 text-foreground/90">Send Me a Message</h3>
      <form className="space-y-5">
        <Input placeholder="Your Name" className="bg-background border-border/50 focus:ring-primary/50" />
        <Input type="email" placeholder="Your Email" className="bg-background border-border/50 focus:ring-primary/50" />
        <Input placeholder="Subject" className="bg-background border-border/50 focus:ring-primary/50" />
        <Textarea placeholder="Your Message" className="min-h-[140px] bg-background border-border/50 focus:ring-primary/50" />
        <Button type="submit" disabled className="w-full bg-primary hover:bg-primary/90 transition-all duration-200">
          Send Message
        </Button>
      </form>
    </div>
  </div>
  <footer className="mt-16 text-center text-sm text-muted-foreground/70">
    <p>© {new Date().getFullYear()} Vishal. All rights reserved.</p>
  </footer>
</section>
  )
}

