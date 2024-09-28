import PortHeader from '../cards/PortHeader';
import AboutMe from '../cards/AboutMe';
import MyWork from '../cards/MyWork';
import Footer from '../cards/Footer';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
      setCurrentPage(page);
      // You could use routing here to navigate to a new page if using react-router
  };
    return (
      <div className="home">
<PortHeader/>
<AboutMe/>
<MyWork onPageChange={handlePageChange}/>
<Footer/>

      </div>
    );
  }
  