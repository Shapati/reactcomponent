
import './App.css';
import Address from './Components/Address';
import FullName from './Components/FullName';
import ProfilePhoto from './Components/ProfilePhoto';

function App() {
  return (
    <div className="App">
        <ProfilePhoto />
        <FullName />
        <Address />
    </div>
  );
}

export default App;
