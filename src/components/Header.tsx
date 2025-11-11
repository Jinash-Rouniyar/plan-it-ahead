import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Plane className="h-6 w-6" />
          <span>PlanItAhead</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/destinations" className="text-sm font-medium hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link to="/itineraries" className="text-sm font-medium hover:text-primary transition-colors">
            My Itineraries
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
