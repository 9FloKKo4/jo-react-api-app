import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./pages/Home";
import ShopsMain from "./components/ShopsMain";
import SitesCompetition from "./pages/SitesCompetition";
import VelosParks from './pages/VeloPark';
import PrepaCenters from './pages/PrepaCenters';
import CulturalEvents from './pages/CulturalEvents';
import Volonteers from './components/VolonteersList';
import FAQ from './components/FaqSearcher';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shops" element={<ShopsMain />} />
          <Route path="/sitesComp" element={<SitesCompetition />} />
          <Route path="/velosParks" element={<VelosParks />} />
          <Route path="/centresPrepa" element={<PrepaCenters />} />
          <Route path="/culturalEvents" element={<CulturalEvents />} />
          <Route path="/volonteersHelp" element={<Volonteers />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;









