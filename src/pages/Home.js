import Header from '../components/header/Header';
import AboutMe from '../components/about/About';

const Home = ({ ChangeCursorVariant }) => (
  <div>
    <Header ChangeCursorVariant={ChangeCursorVariant} />
    <AboutMe ChangeCursorVariant={ChangeCursorVariant} />
  </div>
);

export default Home;
