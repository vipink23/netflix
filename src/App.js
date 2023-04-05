import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import {actions,HorrorMovies,orginals} from './urls'
import './App.css'
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
     <Banner/>
     <Navbar/>
     <RowPost url= {orginals}title ='Netflix Orginal'/>
     <RowPost url={actions} title = 'Action Movies' isSmall/>
     <RowPost url={HorrorMovies} title = 'Horror' isSmall/>
    </div>
  );
}

export default App;
