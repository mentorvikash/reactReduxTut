import './App.css';
import UserInfo from './components/userinfo';
import Tick from './components/tickClock';

const user ={
  name: "vikash",
  age: 26
}

function Welcome(props) {
  return <h4> HELLO ,{props.name}</h4>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>This is Our site</h1>
       <p> My name is {user.name} and my age is {user.age}</p>
       <UserInfo
          username = "Vikash Singh"
          description = "I am a developer and want to develop more app"
        />
        <div className='container'>
        <Welcome name = "sara"/>
        <Welcome name = "jagdish"/>
        <Welcome name = "raj"/>
        </div>
        <Tick />
        </header>
      
    </div>
  );
}

export default App;

