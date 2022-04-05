
import './App.css';
import Address from './Components/profile/Address';
import FullName from './Components/profile/FullName';
import ProfilePhoto from './Components/profile/ProfilePhoto';

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
