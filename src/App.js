import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import hornedBeasts from './hornedBeasts.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [selectBeast, setSelectedBeast] = useState(hornedBeasts);

  const selectedBeast = (hornedBeasts) => {
    setSelectedBeast(hornedBeasts)
  };


  return (
    <div className="App">
      <Header brand='Horned Beasts' />
      <Main 
      selectedBeast={selectedBeast} 
      beasts={hornedBeasts}/>
      <Footer author='Donna Ada'/>
    </div>
  );
}

export default App;
