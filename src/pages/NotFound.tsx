import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="shadow-soft hover:shadow-glow">
            <Link to="/">
              <HomeIcon className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Suggested Pages */}
        <div className="pt-8">
          <p className="text-muted-foreground mb-4">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Skills', path: '/skills' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Button key={link.path} variant="ghost" size="sm" asChild>
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
