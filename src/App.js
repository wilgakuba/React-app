import NotFound from './components/NotFound/NotFound.js'
import Container from './components/Container/Container.js'
import NavBar from './components/NavBar/Navbar.js'
import Home from './components/Home/Home.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import List from './components/List/List';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:listId" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
    </main>
  );
};

export default App;