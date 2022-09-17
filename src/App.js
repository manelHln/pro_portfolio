import {
  Header,
  Footer,
  Skills,
  Works,
  About,
} from "./containers";
import Navbar from "./components/Navbar/Navbar"
import "./App.scss"


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
