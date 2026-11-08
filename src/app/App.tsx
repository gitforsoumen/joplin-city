import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/pages/Homepage';
import { DepartmentLanding } from './components/pages/DepartmentLanding';
import { AnimalControl } from './components/pages/AnimalControl';
import { EventDetails } from './components/pages/EventDetails';
import { DepartmentsDirectory } from './components/pages/DepartmentsDirectory';

type PageType = 'home' | 'health-department' | 'animal-control' | 'event-details' | 'services' | 'departments' | 'government' | 'residents' | 'business' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={handleNavigate} />;
      case 'health-department':
        return <DepartmentLanding onNavigate={handleNavigate} />;
      case 'animal-control':
        return <AnimalControl onNavigate={handleNavigate} />;
      case 'event-details':
        return <EventDetails onNavigate={handleNavigate} />;
      case 'departments':
        return <DepartmentsDirectory onNavigate={handleNavigate} />;
      default:
        return <Homepage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}