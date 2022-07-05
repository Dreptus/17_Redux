import Container from "./Comonents/Container/Container";

import Hero from "./Comonents/Hero/Hero";
import List from "./Comonents/List/List";
import SearchForm from "./Comonents/SearchForm/SearchForm";

function App() {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
}

export default App;
