import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer} from './components/Footer';
import { Banner } from './components/Banner';


function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
