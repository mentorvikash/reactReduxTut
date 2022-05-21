import './App.css';
import UserInfo from './components/userinfo';
import Tick from './components/tickClock';
import User from './user';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User data = {{name:'vikash singh', age:26 }} />
      </header>

    </div>
  );
}

export default App;

