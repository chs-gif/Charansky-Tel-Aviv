// src/App.js
import './App.css';
import Board from './Board'; // אם הקובץ שלך נקרא Bord.jsx, כתבי: import Board from './Bord';

function App4androw() {
  return (
    <div className="App">
      <h1>ארבע בשורה</h1>
      <Board />
    </div>
  );
}


export default App4androw;
