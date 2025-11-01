import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SatvikLifestyle from './pages/SatvikLifestyle';
import VedikFood from './pages/VedikFood';
import FitnessClasses from './pages/FitnessClasses';
import MindBody from './pages/MindBody';
import Challenges from './pages/Challenges';
import Community from './pages/Community';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard'
function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'lifestyle':
        return <SatvikLifestyle />;
      case 'food':
        return <VedikFood />;
      case 'fitness':
        return <FitnessClasses />;
      case 'mind':
        return <MindBody />;
      case 'challenges':
        return <Challenges />;
      case 'community':
        return <Community />;
      case 'profile':
        return <Profile />;
      case 'admindashboard':
        return <AdminDashboard/>
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
