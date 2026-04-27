export const Footer = () => {
  return (
    <footer className="border-t border-border-strong py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* logo */}
        <div className="group font-semibold tracking-tight ">
          <span className="text-foreground transition-colors duration-200 group-hover:text-accent">
            MN
          </span>
          <span className="text-accent transition-colors duration-200 group-hover:text-foreground">
            .
          </span>
        </div>
        <span className="text-muted text-xs">© 2026 Mohammad Naim. All rights reserved.</span>
      </div>
    </footer>
  );
};
