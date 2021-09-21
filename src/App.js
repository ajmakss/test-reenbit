import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Dialogs />
    </BrowserRouter>
  );
}

export default App;
