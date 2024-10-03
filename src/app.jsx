import './App.css';
import { Outlet } from 'react-router-dom';
import PortHeader from './components/cards/PortHeader';

function App() {
  return (
    <div className="portfolio-app">
      <PortHeader />
      <Outlet />
    </div>
  );
}

export default App;
