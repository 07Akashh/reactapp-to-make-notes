import NoteApps from './components/SideNotes';
import NoteApp from './components/NavNote';
import './App.css'
function App() {
  return (
    <div>
      <div className='navNote'><NoteApp/></div>
      <div className='sideNote'><NoteApps/></div>
      
    </div>
  );
}

export default App;
