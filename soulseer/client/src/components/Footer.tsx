import { Link } from "react-router-dom";
import { GitHubIcon, DiscordIcon, PatreonIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-alexBrush text-2xl text-primary">SoulSeer</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Connecting souls across the mystical divide.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/readers" className="text-muted-foreground hover:text-foreground">
                  Readers
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium">Resources</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-muted-foreground hover:text-foreground">
                  Apply to be a Reader
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium">Connect</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href="https://discord.gg/soulseer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <DiscordIcon className="h-5 w-5" />
              </a>
              <a
                href="https://patreon.com/soulseer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <PatreonIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@soulseer.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium">Newsletter</h4>
              <form className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SoulSeer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}