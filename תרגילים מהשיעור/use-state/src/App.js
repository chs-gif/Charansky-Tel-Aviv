import './App.css';
import Counter from './Counter';
import CounterManager from './CounterManager';
import StudentManager from './Students';

function App() {
  return (
    <div className="App">
      <CounterManager/>
      <StudentManager/>
    </div>
  );
}

export default App;
