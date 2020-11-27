import './App.css';
import AppContext from './context/AppContext'
import { AppRouter } from './router/Router';

function App() {
  return (
    <AppContext>
      <AppRouter />
    </AppContext>
  );
}

export default App;
