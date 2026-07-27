import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const homePaths = basePath ? [basePath, `${basePath}/`] : ["/"];
const notFoundPath = basePath ? `${basePath}/404` : "/404";
function Router() {
  return (
    <Switch>
      {homePaths.map((path) => (
        <Route key={path} path={path} component={Home} />
      ))}
      <Route path={notFoundPath} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
