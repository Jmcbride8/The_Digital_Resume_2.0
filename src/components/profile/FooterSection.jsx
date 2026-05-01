import { Mail, Linkedin, Phone } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">Let's Build Something</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Looking to drive digital transformation in your organization? Let's connect.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:jasonmcbride.mba@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" /> Get in Touch
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-12">
          © {new Date().getFullYear()} Jason McBride. Built on Base44.
        </p>
      </div>
    </footer>
  );
}