import { useState } from 'react';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import Accueil from './pages/accueil';
import Apropos from './pages/apropos';
import Services from './pages/service';
import Portfolio from './pages/portfolio';

function App() {
  const [activePage, P_page] = useState('ACCUEIL');
  const renderPage = () => {
    switch (activePage) {
      case 'ACCUEIL':
        return <Accueil />;
      case 'A PROPOS':
        return <Apropos />;
      case 'SERVICES':
        return <Services />;
      case 'PORTFOLIO':
        return <Portfolio />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden ">
      <Navbar setPage={P_page} />

      <main className="pt-20  lg:pt-40">{renderPage()} </main>
    </div>
  );
}

export default App;
