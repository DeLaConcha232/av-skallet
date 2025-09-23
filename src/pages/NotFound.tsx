import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background section-padding">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Página No Encontrada</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Lo siento, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="hover-lift"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver Atrás
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/'}
            size="lg"
            className="hover-lift"
          >
            <Home className="mr-2 h-5 w-5" />
            Ir al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
