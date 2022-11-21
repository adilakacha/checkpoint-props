import './App.css';
import Prof from './Components/Profil';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const myName="adil akacha"
  const myProfession="Student"
  const bio="jawek behi"
    alert('adil akacha')
  
  return (
    <div className="App">
      <Prof 
      myFullName={myName} 
      myProf={myProfession} 
      myBio={bio} 
      myAlert={alert}> 
      <img style={{height:150, width:150}} src="user.png" alt="taswira"></img>
       </Prof>
    </div>
  )
  }

export default App;