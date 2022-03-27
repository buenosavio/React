import './App.css';
import Counter from './components/Counter';
import Mirror from './components/Mirror';
import Name from './components/Name';
import CountProvider from './context/CountContext';
import NameProvider from './context/NameContext';

function App() {
  return (
    <div className="App">
    <NameProvider>
      <CountProvider>
        <Name />
        <Counter/>
        <hr />
        <Mirror />
      </CountProvider>
    </NameProvider>
    </div>
  );
}

export default App;
