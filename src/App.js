import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;