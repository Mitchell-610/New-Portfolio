import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Blog from './pages/Blog';
import TaskBoard from './pages/TaskBoard';
import PayrollTracker from './pages/PayrollTracker';
import WeatherDashboard from './pages/WeatherDashboard';
import PetCronicles from './pages/PetCronicles';
import ReadMe from './pages/ReadMe';
import LogoCreator from './pages/LogoCreator';
import Ecommerce from './pages/Ecommerce';
import MongoDB from './pages/MongoDB';
import Regex from './pages/Regex';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  // useState allows you to set something but it allows a function to change it.
  // If we had it set at 0 and clicked a counter button it would change to one.
  // Like here it is home but with a button click that runs a function it is set to a different page.

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    if (currentPage === 'TaskBoard') {
        return <TaskBoard />;
      }
      if (currentPage === 'PayrollTracker') {
        return <PayrollTracker />;
      }
      if (currentPage === 'WeatherDashboard') {
        return <WeatherDashboard />;
      }
      if (currentPage === 'PetCronicles') {
        return <PetCronicles />;
      }
      if (currentPage === 'ReadMe') {
        return <ReadMe />;
      }
      if (currentPage === 'LogoCreator') {
        return <LogoCreator />;
      }
      if (currentPage === 'Ecommerce') {
        return <Ecommerce />;
      }
      if (currentPage === 'MongoDB') {
        return <MongoDB />;
      }
      if (currentPage === 'Regex') {
        return <Regex />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
