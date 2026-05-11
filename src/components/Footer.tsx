const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-lg font-bold text-primary-foreground">
                SK
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Shilpee Kumari</div>
                <div className="text-sm text-text-muted">Software & AI Engineer</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <a
                href="mailto:shilpee0204@gmail.com"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/shilpee-04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shilpee-kumari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>


          </div>

          {/* Bottom Message */}
          <div className="mt-8 text-center">
            <p className="text-sm text-text-muted">
              Built with ❤️ Shilpee using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;