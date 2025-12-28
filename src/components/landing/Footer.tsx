import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1"></div>
          
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © 2024 Coordexa. Building self-running businesses.
          </p>

          <div className="flex-1 flex justify-end">
            <a 
              href="mailto:contact@coordexa.com"
              className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@coordexa.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
