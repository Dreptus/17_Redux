import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import List from "./components/List/List";
import BlankPage from "./components/BlankPage/BlankPage";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<BlankPage/>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;