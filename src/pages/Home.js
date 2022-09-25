import Header from '../components/header/Header';
import AboutMe from '../components/about/About';
import Projects from '../components/projects/Projects';

// eslint-disable-next-line react/prop-types
const Home = ({ projects }) => (
  <div>
    <Header />
    <AboutMe />
    <Projects projects={projects} />
  </div>
);

export default Home;
