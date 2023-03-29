import "./App.css";
import { Header } from "./sections/index";
import { Home, WatchList, Watched, Search } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/Context/GlobalContext";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Router>
        <ContextProvider>
          <Header />
          <Container>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/watched" element={<Watched />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
