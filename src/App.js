import logo from './logo.svg';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (

      <BrowserRouter>
        <Dialogs/>
    </BrowserRouter>

  );
}

export default App;
