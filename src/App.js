import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Layout>
        <Home />
        <Projects />
        <Contact />
      </Layout>
    </DarkModeProvider>
  );
}

export default App;
