
import './App.css';
import Header from './Header/index'
import { Footer } from './Footer';
import Menu from './Menu/Menu';
import './media.css'

function App() {
  return (
    <div className="App">
      <Header/>  
      <Menu/> 
      <Footer/> 
    </div>
  );
}

export default App;
