import Navbar from "./components/Navbar";
import Advices from "./pages/Advices";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import EcologicalTechnologies from "./pages/EcologicalTechnologies";
import SaveWater from "./pages/SaveWater";
import SaveEnergy from "./pages/SaveEnergy";
import ReduceReuseRecycle from "./pages/ReduceReuseRecycle";
import Plant from "./pages/Plant";
import Support from "./pages/Support";

function App({ router }) {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/advices":
      component = <Advices />;
      break;
    case "/ecological-technologies":
      component = <EcologicalTechnologies />;
      break;
    case "/save-water":
      component = <SaveWater />;
      break;
    case "/save-energy":
      component = <SaveEnergy />;
      break;
    case "/reduce-reuse-recycle":
      component = <ReduceReuseRecycle />;
      break;
    case "/plant":
      component = <Plant />;
      break;
    case "/support":
      component = <Support />;
      break;
  }

  return (
    <>
      <Navbar />
      <AnimatePresence mode={"wait"}>{component}</AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
