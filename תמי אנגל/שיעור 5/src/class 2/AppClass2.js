import logo from './logo.svg';
import './App.css';
import SubjectManager from './SubjectManager';
import CitiesList from './Cities';

function AppClass2() {
  return (
    <div className="App">
      <header className='App-header'>
          <CitiesList></CitiesList>
          <SubjectManager></SubjectManager>
      </header>
    </div>
  );
}

export default AppClass2;
